--dropeo de tablas
drop table "Period" cascade;
drop table "Evaluation" cascade;
drop table "Period_Funcionarity" cascade
--seteo del formato de las fechas
SET DATESTYLE TO 'Postgres';

--delets de las tablas
DELETE FROM "Period";
delete from "Period_Funcionarity";

--dropeo de secuencias
drop sequence sec_TELECOM_factors;

select * from "Period";
select * from "Period_Funcionarity";

create table "Evaluation"(
	id_fun varchar(300) not null,
	periodo varchar(20),
	status varchar(100)
)

select pk_period_name,status,beginning,end_ from public."Period";
/*Logica de la creacion de Periodos*/
create table "Period" (
	pk_period_name varchar(20) primary key,
	beginning date not null, 
	end_ date not null,
	cycle_start  date not null, 
	end_of_cycle  date not null, 
	percentage_indicators NUMERIC(20) not null,
	percentage_components NUMERIC(20) not null,
	status varchar(20),
	created_by varchar(20) not null,
	copy_of varchar(30),
	creation_date date
);
create table "Period_Funcionarity"(
	pk_period_name varchar(20),
	id_fun varchar(40) 
);

-- creacion de funciones
create or replace function date_validation(P_fecha1 date, P_fecha2 date) returns BOOLEAN as $$
 begin
   if P_fecha1 >= P_fecha2 then
   	return FALSE;
	else 
		return TRUE;
   end if;
end;
$$ LANGUAGE plpgsql;

create or replace function percentage_validation(P_data1 numeric, P_data2 numeric) returns BOOLEAN as $$
declare 
suma numeric;
 begin
 	suma :=P_data1+P_data2;
   if suma != 100 then
   	return FALSE;
	else 
		return TRUE;
   end if;
end;
$$ LANGUAGE plpgsql;

create or replace function return_name_period_copy(P_data1 varchar) returns varchar as $$
declare 
V_id varchar(30);
 begin
 	select pk_period_name into V_id from "Period" where pk_period_name = P_data1;
 	return V_id;
end;
$$ LANGUAGE plpgsql;
select return_name_period_copy ('Periodo 2075');
--creacion de secuencias
/*CREATE SEQUENCE order_TELECOM_factors
START 1
INCREMENT 1
MINVALUE 1
OWNED BY "TELECOM_factors".id;

CREATE SEQUENCE order_Component
START 1
INCREMENT 1
MINVALUE 1
OWNED BY "Component".id;

CREATE SEQUENCE order_Indicator
START 1
INCREMENT 1
MINVALUE 1
OWNED BY "Indicator".id;*/


--creacion de un trigger para insertar ciclos sin copia
create or replace FUNCTION assign_status() RETURNS trigger as $assign_status$
declare
V_aux varchar(30);
begin
	if new.copy_of <> 'Seleccionar' and new.copy_of <> '' then 
		if return_name_period_copy(new.copy_of) = null or return_name_period_copy(new.copy_of) = 'null' then
			RAISE NOTICE '% No existe un periodo con ese nombre', new.copy_of;
		else
			V_aux := return_name_period_copy(new.copy_of);
			insert into "Evaluation" (id_fun) select id_fun from "Period_Funcionarity" where pk_period_name = V_aux;
			update "Evaluation" set status = 'Pendiente', periodo = new.pk_period_name WHERE periodo IS NULL;
			
			insert into "Period_Funcionarity" (id_fun) select id_fun from "Period_Funcionarity" where pk_period_name = V_aux;
			UPDATE "Period_Funcionarity" SET pk_period_name = new.pk_period_name WHERE pk_period_name IS NULL;
		end if;
		else 
			V_aux := new.pk_period_name;
			insert into "Evaluation" (id_fun) select id_fun from "Functionary";
			update "Evaluation" set status = 'Pendiente', periodo = new.pk_period_name WHERE periodo IS  NULL;
			
			insert into "Period_Funcionarity" (id_fun) select id_fun from "Functionary";
			UPDATE "Period_Funcionarity" SET pk_period_name = V_aux WHERE pk_period_name IS  NULL;
	end if;
	
	if date_validation(new.beginning,new.end_) = FALSE then 
		RAISE NOTICE '% Fechas invalidas', new.beginning||'---'||new.end_;
	end if;
	if date_validation(new.cycle_start,new.end_of_cycle) = FALSE then 
		RAISE NOTICE '% Fechas invalidas', new.cycle_start||'---'||new.end_of_cycle;
	end if;
	if percentage_validation(new.percentage_indicators,new.percentage_components) = FALSE then 
		RAISE NOTICE '% La suma no es 100',new.percentage_indicators||'---'||new.percentage_components;
	end if;
	new.status:= 'En Diseño';
	new.creation_date:= current_timestamp;
	return new;
end;
$assign_status$ LANGUAGE plpgsql;
create trigger assign_status before insert 
on "Period" for each row
execute procedure assign_status();

insert into "Period"(pk_period_name, beginning, end_, cycle_start, end_of_cycle, percentage_indicators, percentage_components, created_by)
values ('Periodo 2022','2022-10-04','2022-10-10','2022-10-04','2022-10-13',20,80,'Una test');

insert into public."Period"(pk_period_name, beginning, end_, cycle_start, end_of_cycle, percentage_indicators,percentage_components, created_by,copy_of)
VALUES ('Periodo 2026','2026-10-04','2026-10-10','2026-10-04','2026-10-20',20,80,'Una test','Periodo 2025');

insert into public."Period"(pk_period_name, beginning, end_, cycle_start, end_of_cycle, percentage_indicators,percentage_components, created_by)
VALUES ('Periodo 2029','2024-10-04','2024-10-10','2024-10-04','2024-10-20',20,80,'Una test');


/*Aqui estoy creando una a una las tablas de evaluacion dependiendo la familia*/

/*NO PROFESIONALES*/
drop table "non-professionalSkills-weighted" cascade;
drop table "non-professionalSkillOperative" cascade;
drop table "non-professionalSkillTecnic" cascade;
drop table "non-professionalSkillsName" cascade;

select * from "non-professionalSkills-weighted";
select * from "non-professionalSkill";
select * from "non-professionalSkillsName";
select * from "non-professionalSkillTecnic";

create table "non-professionalSkills-weighted"(
	fourthLevel DECIMAL not null,
	fifthLevel DECIMAL not null,
	individualSkills DECIMAL not null,
	selfAppraisal DECIMAL not null
);

create table "non-professionalSkillsName"(
	competitionName varchar(100) primary key
);
/*NO PROFESIONALES OPERATIVOS*/
create table "non-professionalSkillOperative"(
	actions varchar(100) unique not null,
	competitionName varchar(100) not null
);
/*NO PROFESIONALES TÉCNNICO*/
create table "non-professionalSkillTecnic"(
	actions varchar(100) unique not null,
	competitionName varchar(100) not null
);
alter table public."non-professionalSkillOperative" add constraint fk_non_professionalSkill FOREIGN KEY ("competitionname") REFERENCES public."non-professionalSkillsName";
alter table public."non-professionalSkillTecnic" add constraint fk_non_professionalSkill FOREIGN KEY ("competitionname") REFERENCES public."non-professionalSkillsName";

insert into "non-professionalSkills-weighted" values(0.10,0.70,0.15,0.05);

insert into "non-professionalSkillsName" values ('Compromiso con el servicio público'),('Integridad en el desempeño de la función pública'),
('Calidad y productividad'),('Dominio y aplicación práctica'),('Trabajo Colaborativo'),('Análisis y solución de situaciones'),('Dominio y credibilidad técnica');

/*NO PROFESIONALES OPERATIVOS*/
insert into "non-professionalSkillOperative" values ('Adhesión a valores del servicio público','Compromiso con el servicio público'),
('Involucramiento y compromiso','Compromiso con el servicio público'),
('Preocupación y empatía por la persona ciudadana y el servicio público','Compromiso con el servicio público');

insert into "non-professionalSkillOperative" values ('Probidad (actuación intachable)','Integridad en el desempeño de la función pública'),
('Buen uso de los recursos (transparencia)','Integridad en el desempeño de la función pública');

insert into "non-professionalSkillOperative" values ('Administración adecuada de los recursos','Calidad y productividad'),
('Resultados oportunos y a tiempo satisfacción del ente o persona usuaria trabajo confiable y seguro','Calidad y productividad'),('Propuesta de nuevas formas de resolver (creatividad)','Calidad y productividad');

insert into "non-professionalSkillOperative" values ('Uso y dominio de herramientas e insumos ','Dominio y aplicación práctica'),
('Conoce su campo de trabajo se apega a protocolos e instrucciones','Dominio y aplicación práctica'),
('Cuidado de espacio de trabajo y recursos','Dominio y aplicación práctica'),
('Mantiene ordenada la información de su quehacer','Dominio y aplicación práctica');

insert into "non-professionalSkillOperative" values ('Tolerancia a trabajar bajo presión / flexibilidad','Trabajo Colaborativo'),
('Manejo emocional / respeto de diferencias comunicación e influencia','Trabajo Colaborativo'),('Integración y colaboración en equipo','Trabajo Colaborativo');

/*NO PROFESIONALES TÉCNNICO*/
insert into "non-professionalSkillTecnic" values ('Adhesión a valores del servicio público','Compromiso con el servicio público'),
('Involucramiento y compromiso','Compromiso con el servicio público'),
('Preocupación y empatía por la persona ciudadana y el servicio público','Compromiso con el servicio público');

insert into "non-professionalSkillTecnic" values ('Probidad (actuación intachable)','Integridad en el desempeño de la función pública'),
('Buen uso de los recursos (transparencia)','Integridad en el desempeño de la función pública');

insert into "non-professionalSkillTecnic" values ('Dominio de información e insumos para su trabajo','Dominio y credibilidad técnica'),
('Conocimiento y actualización en las temáticas de conocimiento de su campo de trabajo','Dominio y credibilidad técnica');

insert into "non-professionalSkillTecnic" values ('Administración adecuada de los recursos','Calidad y productividad'),
('Resultados oportunos y a tiempo satisfacción del ente o persona usuaria trabajo confiable y seguro','Calidad y productividad'),('Propuesta de nuevas formas de resolver (creatividad)','Calidad y productividad');

insert into "non-professionalSkillTecnic" values ('Pensamiento Analítico','Análisis y solución de situaciones'),
('Autonomía / Toma de decisiones','Análisis y solución de situaciones'),
('Evaluar resultados y mejora continua','Análisis y solución de situaciones');

insert into "non-professionalSkillTecnic" values ('Tolerancia a trabajar bajo presión / flexibilidad','Trabajo Colaborativo'),
('Manejo emocional / respeto de diferencias comunicación e influencia','Trabajo Colaborativo'),('Integración y colaboración en equipo','Trabajo Colaborativo');

/*PROFESIONAL-JEFE*/
/*Asociados a la investigacion, analisis y asesoramiento en politicas*/
drop table "professionalSkills-weighted" cascade;
drop table "BossSkill" cascade;
drop table "professionalSkill" cascade;
drop table "professionalSkillsName" cascade;

select * from "professionalSkills-weighted";
select * from "professionalSkill";
select * from "professionalSkillsName";
select * from "BossSkill";

create table "professionalSkills-weighted"(
	firstLevel decimal not null,
	secondLevel decimal not null,
	fourthLevel DECIMAL not null,
	fifthLevel DECIMAL not null,
	individualSkills DECIMAL not null,
	selfAppraisal DECIMAL not null
);

create table "professionalSkillsName"(
	competitionName varchar(200) primary key
);
/*PROFESIONAL*/
CREATE TABLE "professionalSkill"(
	actions varchar(200) unique not null,
	competitionName varchar(200) not null
);
/*JEFE*/
CREATE TABLE "BossSkill"(
	actions varchar(200) unique not null,
	competitionName varchar(200) not null
);
alter table public."professionalSkill" add constraint fk_professionalSkill FOREIGN KEY ("competitionname") REFERENCES public."professionalSkillsName";
alter table public."BossSkill" add constraint fk_BossSkill FOREIGN KEY ("competitionname") REFERENCES public."professionalSkillsName";

insert into "professionalSkills-weighted" values (0.15,0.15,0.20,0.30,0.15,0.5);

insert into "professionalSkillsName" values ('Compromiso con el servicio público'),('Integridad en el desempeño de la función pública'),
('Análisis y solución de situaciones'),('Acción estratégica e innovadora'),('Gestión de calidad'),('Sensibilidad tecnológica'),('Trabajo colaborativo'),
('Liderazgo'),('Visión estratégica'),('Toma de decisiones'),('Comunicación efectiva'),('Manejo y resolución de conflictos');

/*PROFESIONAL*/
insert into "professionalSkill" values ('Adhesión a valores del servicio público','Compromiso con el servicio público'),
('Involucramiento y compromiso','Compromiso con el servicio público'),
('Preocupación y empatía por la persona ciudadana y el servicio público','Compromiso con el servicio público');

insert into "professionalSkill" values ('Probidad (actuación intachable)','Integridad en el desempeño de la función pública'),
('Buen uso de los recursos (transparencia)','Integridad en el desempeño de la función pública');

insert into "professionalSkill" values ('Pensamiento analítico','Análisis y solución de situaciones'),
('Autonomía / toma de decisiones','Análisis y solución de situaciones'),
('Evaluar resultados y mejora continua','Análisis y solución de situaciones');

insert into "professionalSkill" values ('Comprensión de cambios del entorno','Acción estratégica e innovadora'),
('Innovación y creatividad','Acción estratégica e innovadora'),
('Liderazgo e influencia ante los demás para el cumplimiento de objetivos','Acción estratégica e innovadora');

insert into "professionalSkill" values ('Aporte de excelencia y compromiso con la calidad','Gestión de calidad'),
('Mejora y optimización de sus trabajos','Gestión de calidad'),
('Preocupación por la satisfacción de persona usuaria','Gestión de calidad');

insert into "professionalSkill" values ('Sensibilidad y adaptación tecnológica','Sensibilidad tecnológica'),
('Uso de tecnología para solución de situaciones','Sensibilidad tecnológica'),
('Gestión del conocimiento','Sensibilidad tecnológica');

insert into "professionalSkill" values ('Tolerancia a trabajar bajo presión / flexibilidad','Trabajo colaborativo'),
('Manejo emocional / respeto de diferencias, comunicación e influencia','Trabajo colaborativo'),
('Integración y colaboración en equipo','Trabajo colaborativo');

/*JEFE*/
insert into "BossSkill" values ('Adhesión a valores del servicio público','Compromiso con el servicio público'),
('Involucramiento y compromiso','Compromiso con el servicio público'),
('Preocupación y empatía por la persona ciudadana y el servicio público','Compromiso con el servicio público');

insert into "BossSkill" values ('Probidad (actuación intachable)','Integridad en el desempeño de la función pública'),
('Buen uso de los recursos (transparencia)','Integridad en el desempeño de la función pública');

insert into "BossSkill" values ('Gestión del talento humano','Liderazgo'),
('Clima y ambiente colaborativo','Liderazgo'),
('Orientación a resultados','Liderazgo');

insert into "BossSkill" values ('Anticiparse y actualizarse (visión futura)','Visión estratégica'),
('Ser capaz de incorporar los cambios en la gestión','Visión estratégica'),
('Motivar a la organización a cambios (liderazgo con valor público)','Visión estratégica');

insert into "BossSkill" values ('Proactividad estratégica','Toma de decisiones'),
('Capacidad de determinar indicadores y/o formas de control que permitan evaluar alternativas y decisiones tomadas','Toma de decisiones');

insert into "BossSkill" values ('Estrategias de empatía y claridad comunicativa','Comunicación efectiva'),
('Comunicación estratégica','Comunicación efectiva');

insert into "BossSkill" values ('Promover ambiente de respeto antes situaciones de conflicto','Manejo y resolución de conflictos'),
('Búsqueda de soluciones','Manejo y resolución de conflictos'),
('Control y manejo emocional','Manejo y resolución de conflictos');

/*PROFESIONAL-JEFE*/
/*Asociados a gerencia y administración*/
drop table "professionalSkills-weighted_2" cascade;
drop table "BossSkill_2" cascade;
drop table "professionalSkill_2" cascade;
drop table "professionalSkillsName_2" cascade;

select * from "professionalSkills-weighted_2";
select * from "professionalSkill_2";
select * from "professionalSkillsName_2";
select * from "BossSkill_2";

create table "professionalSkills-weighted_2"(
	fourthLevel DECIMAL not null,
	fifthLevel DECIMAL not null,
	individualSkills DECIMAL not null,
	selfAppraisal DECIMAL not null
);

create table "professionalSkillsName_2"(
	competitionName varchar(200) primary key
);
/*PROFESIONAL*/
CREATE TABLE "professionalSkill_2"(
	actions varchar(200) unique not null,
	competitionName varchar(200) not null
);
/*JEFE*/
CREATE TABLE "BossSkill_2"(
	actions varchar(200) unique not null,
	competitionName varchar(200) not null
);
alter table public."professionalSkill_2" add constraint fk_professionalSkill_2 FOREIGN KEY ("competitionname") REFERENCES public."professionalSkillsName_2";
alter table public."BossSkill_2" add constraint fk_BossSkill_2 FOREIGN KEY ("competitionname") REFERENCES public."professionalSkillsName_2";

insert into "professionalSkills-weighted_2" values (0.20,0.60,0.45,0.05);

insert into "professionalSkillsName_2" values ('Compromiso con el servicio público'),('Integridad en el desempeño de la función pública'),
('Análisis y solución de situaciones'),('Acción estratégica e innovadora'),('Gestión de calidad'),('Sensibilidad tecnológica'),('Trabajo colaborativo'),
('Liderazgo'),('Visión estratégica'),('Toma de decisiones'),('Comunicación efectiva'),('Manejo y resolución de conflictos');

/*Profesional*/
insert into "professionalSkill_2" values ('Probidad (actuación intachable)','Compromiso con el servicio público'),
('Involucramiento y compromiso','Compromiso con el servicio público'),
('Preocupación y empatía por la persona ciudadana y el servicio público','Compromiso con el servicio público');

insert into "professionalSkill_2" values ('Adhesión a valores del servicio público','Integridad en el desempeño de la función pública'),
('Buen uso de los recursos (transparencia)','Integridad en el desempeño de la función pública');

insert into "professionalSkill_2" values ('Pensamiento analítico','Análisis y solución de situaciones'),
('Autonomía / toma de decisiones','Análisis y solución de situaciones'),
('Evaluar resultados y mejora continua','Análisis y solución de situaciones');

insert into "professionalSkill_2" values ('Comprensión de cambios del entorno','Acción estratégica e innovadora'),
('Innovación y creatividad','Acción estratégica e innovadora'),
('Liderazgo e influencia ante los demás para el cumplimiento de objetivos','Acción estratégica e innovadora');

insert into "professionalSkill_2" values ('Aporte de excelencia y compromiso con la calidad','Gestión de calidad'),
('Mejora y optimización de sus trabajos','Gestión de calidad'),
('Preocupación por la satisfacción de persona usuaria','Gestión de calidad');

insert into "professionalSkill_2" values ('Sensibilidad y adaptación tecnológica','Sensibilidad tecnológica'),
('Uso de tecnología para solución de situaciones','Sensibilidad tecnológica'),
('Gestión del conocimiento','Sensibilidad tecnológica');

/*JEFE*/
insert into "BossSkill_2" values ('Adhesión a valores del servicio público','Compromiso con el servicio público'),
('Involucramiento y compromiso','Compromiso con el servicio público'),
('Preocupación y empatía por la persona ciudadana y el servicio público','Compromiso con el servicio público');

insert into "BossSkill_2" values ('Probidad (actuación intachable)','Integridad en el desempeño de la función pública'),
('Buen uso de los recursos (transparencia)','Integridad en el desempeño de la función pública');

insert into "BossSkill_2" values ('Gestión del talento humano','Liderazgo'),
('Clima y ambiente colaborativo','Liderazgo'),
('Orientación a resultados','Liderazgo');

insert into "BossSkill_2" values ('Anticiparse y actualizarse (visión futura)','Visión estratégica'),
('Ser capaz de incorporar los cambios en la gestión','Visión estratégica'),
('Motivar a la organización a cambios (liderazgo con valor público)','Visión estratégica');

insert into "BossSkill_2" values ('Proactividad estratégica','Toma de decisiones'),
('Capacidad de determinar indicadores y/o formas de control que permitan evaluar alternativas y decisiones tomadas','Toma de decisiones');

insert into "BossSkill_2" values ('Estrategias de empatía y claridad comunicativa','Comunicación efectiva'),
('Comunicación estratégica','Comunicación efectiva');

insert into "BossSkill_2" values ('Promover ambiente de respeto antes situaciones de conflicto','Manejo y resolución de conflictos'),
('Búsqueda de soluciones','Manejo y resolución de conflictos'),
('Control y manejo emocional','Manejo y resolución de conflictos');

/*JEFE*/
/*Asociados Alta Dirección Píblica*/
drop table "professionalSkills-weighted_3" cascade;
drop table "BossSkill_3" cascade;
drop table "professionalSkillsName_3" cascade;
drop table "levelOfDevelopment" cascade;
drop table "evaluationIndividualSkills" cascade;
drop table "professionalSkills-description_3" cascade;
drop table "rubricEvaluation" cascade;

select * from "professionalSkills-weighted_3";
select * from "professionalSkillsName_3";
select * from "BossSkill_3";
select * from "levelOfDevelopment";
select * from "evaluationIndividualSkills";



create table "professionalSkills-weighted_3"(
	firstLevel decimal not null,
	secondLevel decimal not null,
	thirdLevel DECIMAL not null,
	fourthLevel DECIMAL not null,
	individualSkills DECIMAL not null,
	selfAppraisal DECIMAL not null,
	QualifiOfCollaborators Decimal not null
);
create table "professionalSkills-description_3"(
	firstLevel varchar(500) not null,
	secondLevel varchar(500) not null,
	thirdLevel varchar(500) not null,
	fourthLevel varchar(500) not null,
	individualSkills varchar(500) not null,
	selfAppraisal varchar(500) not null,
	QualifiOfCollaborators varchar(500) not null
);

create table "professionalSkillsName_3"(
	competitionName varchar(200) primary key
);
create table "levelOfDevelopment" (
	basic decimal not null,
	intermediate decimal not null,
	advanced decimal not null,
	outstanding decimal not null
);
create table "evaluationIndividualSkills"(
	id_fun varchar(40) primary key,
	periodName VARCHAR(30),
	TotalindividualSkills numeric(10),
	percentageIndividualSkills decimal,
	TotalindividualSkillsBoss numeric(10),
	percentageIndividualSkillsBoss decimal
);
create table "rubricEvaluation"(
	leveldevelopment varchar(20),
	description varchar(500)
);

/*JEFE*/
CREATE TABLE "BossSkill_3"(
	actions varchar(200) unique not null,
	competitionName varchar(200) not null
);

alter table public."BossSkill_3" add constraint fk_BossSkill_3 FOREIGN KEY ("competitionname") REFERENCES public."professionalSkillsName_3";

insert into "rubricEvaluation" values ('Básico','La competencia se muestra en su primera etapa de desarrollo, por lo que sus comportamientos están en un nivel inicial. En este nivel, las personas están en la capacidad de reconocer y emplear sus destrezas personales para la ejecución de sus funciones. Valor: 1'),
('Intermedio','La competencia se muestra en el perfeccionamiento de su desarrollo, por lo que sus comportamientos poseen mayor complejidad y detalle. En este nivel, las personsa además de reconocer y aplicar sus destrezas, están en la capacidad de potenciar la efectividad de su trabajo. Valor: 2'),
('Avanzado','La competencia se muestra plenamente desarrollada, por lo que sus comportamientos poseen un nivel superior de complejidad y detalle. En este nivel, las personas además de potenciar la efectividad de su trabajo, aplican sus destrezas para alcanzar objetivos individuales y colectivos, en pro de la mejora continua. Valor:3'),
('Destacado','La competencia se muestra desarrollada en su nivel más alto, por lo que sus comportamientos poseen el grado máximo de dominio. En este nivel, las personas son un referente para su equipo de trabajo e institución en general, por cuanto sus funciones de excelencia influyen positivamente hacia las demás personas y al logro y satisfacción de las necesidades institucionales. Valor: 4');

insert into "professionalSkills-description_3" values ('Comprende la contribución en el cumplimiento de los objetivos y metas de: Plan Estratégico Nacional (PEN), Plan Nacional de Desarrollo e Inversiones, Públicas (PNDIP), Planes sectoriales (PS).',
'Comprende la contribución en el cumplimiento de los objetivos y metas de: Plan Estratégico Institucional (PEI), Plan Operativo Institucional (POI), Plan Operativo Anual (POA).',
'Comprende a evaluaciones de percepción de prestación de bienes y servicios realizadas por parte de la Contraloría de Servicios, o bien evaluaciones de percepción a partir de Índice de Cumplimientos de las Contralorías de Servicios.',
'Comprende la contribución en el cumplimiento de los objetivos y metas de la dependencia (dirección, departamento, servicio o unidad, unidad asesora, entre otras dependencias semejantes).',
'Corresponde a la calificación que se asigne de acuerdo a las competencias definidas para su puesto.',
'Corresponde a la auto-evaluación que se brinda la persona servidora pública, a partir de un análisis autocrítico de su desempeño.',
'En el caso de las jefaturas, también se incluirá la calificación que efectúen las personas trabajadoras bajo su cargo con respecto a su gestión, de acuerdo con los criterios institucionales que se definen.');

insert into "professionalSkills-weighted_3" values (0.30,0.30,0.05,0.15,0.10,0.05,0.05);

insert into "professionalSkillsName_3" values ('Compromiso con el servicio público'),('Integridad en el desempeño de la función pública'),
('Liderazgo'),('Visión estratégica'),('Toma de decisiones'),('Comunicación efectiva'),('Manejo y resolución de conflictos');

insert into "BossSkill_3" values ('Adhesión a valores del servicio público','Compromiso con el servicio público'),
('Involucramiento y compromiso','Compromiso con el servicio público'),
('Preocupación y empatía por la persona ciudadana y el servicio público','Compromiso con el servicio público');

insert into "BossSkill_3" values ('Probidad (actuación intachable)','Integridad en el desempeño de la función pública'),
('Buen uso de los recursos (transparencia)','Integridad en el desempeño de la función pública');

insert into "BossSkill_3" values ('Gestión del talento humano','Liderazgo'),
('Clima y ambiente colaborativo','Liderazgo'),
('Orientación a resultados','Liderazgo');

insert into "BossSkill_3" values ('Anticiparse y actualizarse (visión futura)','Visión estratégica'),
('Ser capaz de incorporar los cambios en la gestión','Visión estratégica'),
('Motivar a la organización a cambios (liderazgo con valor público)','Visión estratégica');

insert into "BossSkill_3" values ('Proactividad estratégica','Toma de decisiones'),
('Capacidad de determinar indicadores y/o formas de control que permitan evaluar alternativas y decisiones tomadas','Toma de decisiones');

insert into "BossSkill_3" values ('Estrategias de empatía y claridad comunicativa','Comunicación efectiva'),
('Comunicación estratégica','Comunicación efectiva');

insert into "BossSkill_3" values ('Promover ambiente de respeto antes situaciones de conflicto','Manejo y resolución de conflictos'),
('Búsqueda de soluciones','Manejo y resolución de conflictos'),
('Control y manejo emocional','Manejo y resolución de conflictos');



