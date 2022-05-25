drop table "User" cascade;
drop table "Functionary" cascade;
drop table "roles_user" cascade;
drop table "Role" cascade;
drop table "Stimulus" cascade;
drop table "job_class_CIT" cascade;
drop table "job_class_TELECOM" cascade;
drop table "Department_Boss" cascade;

select * from "Functionary";
select * from "User";
select * from "Stimulus";
select * from "Role";
select * from "roles_user";


delete from "User";
delete from "Functionary";

create table "Role" (pk_role_name varchar(50) primary key);

create table roles_user(
	id_user NUMERIC(10),
	role_name varchar(50)
);
create table "User" (
	pk_id_num NUMERIC(10) primary key,
	user_name varchar(50) not null, 
	password varchar(80) not null
);
create table "Stimulus" (
	pk_id_stimulus serial primary key,
	description varchar(500) not null
);
create table "Functionary" (
	pk_id_num "numeric" primary key,
	vice_ministry varchar(100) not null,
	deparment varchar(100) not null,
	position_number NUMERIC(100),
	name_fun varchar(100) not null,
	last_name VARCHAR(100) not null,
	id_fun varchar(100) not null,
	organizational_unit varchar(100) not null,
	job_class varchar(100),
	specialty varchar(100),
	subspecialty varchar(100),
	own_specialty varchar(100),
	post VARCHAR (100),
	residency VARCHAR(100) not null,
	appointment_condition VARCHAR(100),
	occupational_stratum VARCHAR(100) not null,
	family_group VARCHAR(100),
	mail VARCHAR(100) not null,
	telephone VARCHAR(100),
	status VARCHAR(100),
	boss VARCHAR(100)
	
);
create table "department_TELECOM_Boss"(
	id_boss numeric unique not null ,
	departament VARCHAR(100) unique not null
);
create table "department_CIT_Boss"(
	id_boss numeric unique not null ,
	departament VARCHAR(100) unique not null
);
/*Falta el foreing key hacia funcionario, ya que para que un jefa exista dene ser antes funcionario*/
alter table "department_TELECOM_Boss" add constraint fk_department_TELECOM_Boss FOREIGN KEY ("departament") REFERENCES "department_TELECOM";
alter table "department_CIT_Boss" add constraint fk_department_CIT FOREIGN KEY ("departament") REFERENCES "department_CIT";

alter table "roles_user" add constraint fk_user_role_name FOREIGN KEY ("role_name") REFERENCES "Role" ;
alter table "roles_user" add constraint fk_user_role_id FOREIGN KEY ("id_user") REFERENCES "User" ;


/*alter table "Role" add constraint ck_role check ( "pk_role_name"='Funcionario' or
														"pk_role_name" = 'Supervisor Recursos Humanos' or
													    "pk_role_name"='Evaluador' or
													   "pk_role_name"='Jefe Superior' or
													  "pk_role_name"='Administrador');*/
													  
alter table "Functionary" add constraint ck_status_fun check ( "status"='Activo' or "status"= 'Inactivo');
alter table "Functionary" add constraint ck_residency_fun check ( "residency"='Nacional' or "residency"= 'Extranjero');
insert into "Functionary" values(1111,'Viceministerio de Ciencia, Innovación y Tecnología','Departamento de Gestión Institucional de Recursos Humanos',357800,
								 'Marylin','Masis González','3-0456-0292','Dirección de Concesiones y Normas en Telecomunicaciones',
								 'Profesional de Servicio Civil 2','Administración','Generalista',NULL,'Analista del Departamento Gestión Institucional de Recursos Humanos',
								 'Nacional','Interino','Profesional','Gerencia y Administración','marylin.masis@micit.go.cr','86123456','Activo', '1-1242-0148');

insert into "Functionary" values(2222,'Viceministerio de Ciencia, Innovación y Tecnología','Unidad de Servicios Tecnológicos',105561,'Esteban Alfonso',
								 'Monge Cordero','1-1056-0072','Unidad de Servicios Tecnológicos','Profesional Informática 1-B',
								 'Informática y Computación','','','Analista Servicios Tecnológicos','Nacional','Propiedad','Profesional','Gerencia y Administración',
								 'esteban.monge@micit.go.cr','86546799','Activo', '1-1242-0148');

insert into "Functionary" values(8767, 'Viceministerio de Ciencia, Innovación y Tecnología', 'Departamento de Gestión Institucional de Recursos Humanos', 330007, 
								'María Gabriela', 'Grossi Castillo', '1-1242-0148', 'Dirección Administrativa y Financiera', 'Profesional Jefe Servicio Civil 1', 
								'Administración de Recursos Humanos', null, null, 'Jefe Departamento de Gestión Institucional de Recursos Humanos', 'Nacional',
								'Propiedad', 'Gerencial', 'Gerencia y Administración', 'mariagrossi@micitt.go.cr', '83256254', 'Activo', null);

insert into "roles_user" values(1111,'Funcionario');
insert into "roles_user" values(1111,'Supervisor Recursos Humanos');
insert into "roles_user" values(2222,'Funcionario');
insert into "roles_user" values(8767,'Jefe Superior');

INSERT INTO "User" VALUES (1111, 'marylin.masis.gonzalez', 'Micitt_465');

INSERT INTO "User" VALUES (2222, 'esteban.monge.cordero', 'Micitt_561');

INSERT INTO "User" VALUES (8767, 'maría.grossi.castillo', 'Micitt_7584');

insert into "Stimulus" values (1234,'Reconocimiento a la persona funcionaria mediante oficio firmado por la jefatura superior en que se destaque su mérito y 
							   alto desempeño(con copia al expediente).');

insert into "Stimulus" values (7654,'Publicación de mensaje por medio de correo electrónico público, felicitando a la persona funcionaria.');

insert into "Stimulus" values (3947,'El día de cumpleaños se da en descanso sin que este sea deducido del periodo de vacaciones de la persona funcionaria,
							   en coordinación con la jefatura inmediata. Si este día coincide con fin de semana o feriado o por razones laborales no se puede disfrutar ese día, 
							   el estímulo podrá ser disfrutado en un periodo no mayor a 15 días naturales después del día de cumpleaños.');
		
insert into "Role" values ('Funcionario');		
insert into "Role" values ('Supervisor Recursos Humanos');		
insert into "Role" values ('Evaluador');		
insert into "Role" values ('Jefe Superior');		
insert into "Role" values ('Administrador');		
		
insert into "roles_user" values(1111,'Funcionario');
insert into "roles_user" values(1111,'Supervisor Recursos Humanos');
insert into "roles_user" values(2222,'Funcionario');

insert into "department_CIT_Boss" values (097540,'Despacho Ministerial');
insert into "department_TELECOM_Boss" values (356259,'Departamento de Políticas Públicas de Telecomunicaciones');

drop table "department_TELECOM";
drop table "department_CIT";

create table "occupational_stratum" (pk_stratum varchar(400) primary key);

create table "specialty" (pk_specialty varchar(400) primary key);

create table "appointment_condition" (pk_condition varchar(400) primary key);

create table "family" (pk_family varchar(400) primary key);

create table "job_class_TELECOM" (pk_classt varchar(400) primary key);
create table "job_class_CIT" (pk_classC varchar(400) primary key);

create table "organizational_unit_CIT" (pk_organizational_unit_CIT varchar(400) primary key);
create table "organizational_unit_TELECOM" (pk_organizational_unit_TELECOM varchar(400) primary key);

create table "department_TELECOM" (pk_departmentT varchar(400)primary key);
create table "department_CIT" (pk_departmentC varchar(400) primary key);

create table "post" (pk_post varchar(400) primary key);

insert into "occupational_stratum" values('Ejecutivo');
insert into "occupational_stratum" values('Gerencial');
insert into "occupational_stratum" values('Operativo');
insert into "occupational_stratum" values('Profesional');
insert into "occupational_stratum" values('Técnico');

insert into "specialty" values('Sin especialidad');
insert into "specialty" values('Administración');
insert into "specialty" values('Administración de Recursos Humanos');
insert into "specialty" values('Administración Pública');
insert into "specialty" values('Archivística');
insert into "specialty" values('Auditoría');
insert into "specialty" values('Ciencias Políticas');
insert into "specialty" values('Cooperación Internacional');
insert into "specialty" values('Biología');
insert into "specialty" values('Derecho');
insert into "specialty" values('Divulgación');
insert into "specialty" values('Economía');
insert into "specialty" values('Estadística');
insert into "specialty" values('Informática');
insert into "specialty" values('Informática y computación');
insert into "specialty" values('Ingeniería industrial');
insert into "specialty" values('Labores varias de oficina');
insert into "specialty" values('Mantenimiento de equipo de computo');
insert into "specialty" values('Operación Internacional');
insert into "specialty" values('Periodismo');
insert into "specialty" values('Planificación');
insert into "specialty" values('Planificación económica y social');
insert into "specialty" values('Salud ocupacional');
insert into "specialty" values('Socióloga');
insert into "specialty" values('Vehículo liviano');

insert into "appointment_condition" values('De confianza');
insert into "appointment_condition" values('Interino');
insert into "appointment_condition" values('Propiedad');
insert into "appointment_condition" values('Vacante');

insert into "family" values('Alta Dirección Pública');
insert into "family" values('Gerencia y Administración');
insert into "family" values('Investigación, Análisis y Asesoramiento de Políticas');
insert into "family" values('No Profesionales');
insert into "family" values('Prestación de Servicios Públicos');

insert into "job_class_TELECOM" values('Viceministro');
insert into "job_class_TELECOM" values('Director');
insert into "job_class_TELECOM" values('Gerente de Despacho');
insert into "job_class_TELECOM" values('Profesional Telecomunicaciones');
insert into "job_class_TELECOM" values('Asistente Telecomunicaciones');
insert into "job_class_TELECOM" values('Jefe');

insert into "job_class_CIT" values('Asesor Profesional');
insert into "job_class_CIT" values('Asistente Administrativo');
insert into "job_class_CIT" values('Asistente Profesional');
insert into "job_class_CIT" values('Asistente Técnico');
insert into "job_class_CIT" values('Auditor Interno N-1');
insert into "job_class_CIT" values('Chofer');
insert into "job_class_CIT" values('Conductor de Servicio Civil 1');
insert into "job_class_CIT" values('Conductor de Servicio Civil 2');
insert into "job_class_CIT" values('Consultor Licenciado');
insert into "job_class_CIT" values('Consultor Licenciado Experto');
insert into "job_class_CIT" values('Director de Certificaciones de Firma Digital');
insert into "job_class_CIT" values('Director de Innovación del MICITT');
insert into "job_class_CIT" values('Director de Investigación y Desarrollo Tecnológico');
insert into "job_class_CIT" values('Director del Fomento de la Ciencia');
insert into "job_class_CIT" values('Ministro');
insert into "job_class_CIT" values('Oficial Mayor y Director General Administrativo Financiero');
insert into "job_class_CIT" values('Oficinista de Servicio Civil 1');
insert into "job_class_CIT" values('Oficinista Servicio Civil 2');
insert into "job_class_CIT" values('Profesional Servicio Civil 1-A');
insert into "job_class_CIT" values('Profesional Servicio Civil 1-B');
insert into "job_class_CIT" values('Profesional Servicio Civil 2');
insert into "job_class_CIT" values('Profesional Servicio Civil 3');
insert into "job_class_CIT" values('Profesional Informática 1-A');
insert into "job_class_CIT" values('Profesional Informática 1-B');
insert into "job_class_CIT" values('Profesional Informática 1-C');
insert into "job_class_CIT" values('Profesional Informática 2');
insert into "job_class_CIT" values('Profesional Informática 3');
insert into "job_class_CIT" values('Profesional Jefe Servicio Civil 1');
insert into "job_class_CIT" values('Profesional Jefe Servicio Civil 2');
insert into "job_class_CIT" values('Profesional Jefe en Informática 1-B');
insert into "job_class_CIT" values('Profesional Jefe Servicio Civil 3');
insert into "job_class_CIT" values('Secretaría de Servicio Civil 1');
insert into "job_class_CIT" values('Técnico Servicio Civil 1');
insert into "job_class_CIT" values('Técnico Servicio Civil 2');
insert into "job_class_CIT" values('Técnico Servicio Civil 3');
insert into "job_class_CIT" values('Técnico en Informática 2');
insert into "job_class_CIT" values('Viceministro de Ciencia Innovación y Tecnología');

insert into "organizational_unit_CIT" values('Despacho del Viceministerio de Telecomunicaciones');
insert into "organizational_unit_CIT" values('Dirección de Espectro Radioeléctrico y Redes de Telecomunicaciones');
insert into "organizational_unit_CIT" values('Dirección de Evolución y Mercado de Telecomunicaciones');
insert into "organizational_unit_CIT" values('Dirección de Concesiones y Normas en Telecomunicaciones');

insert into "organizational_unit_TELECOM" values('Asuntos Jurídicos');
insert into "organizational_unit_TELECOM" values('Auditoría Interna');
insert into "organizational_unit_TELECOM" values('Contraloría de Servicios');
insert into "organizational_unit_TELECOM" values('Departamento Financiero');
insert into "organizational_unit_TELECOM" values('Departamento de Fortalecimiento de las Capacidades en Ciencia y Tecnología');
insert into "organizational_unit_TELECOM" values('Departamento de Gestión Institucional de Recursos Humanos');
insert into "organizational_unit_TELECOM" values('Departamento de Promoción de la Ciencia y la Tecnología');
insert into "organizational_unit_TELECOM" values('Departamento de Proveduría Institucional');
insert into "organizational_unit_TELECOM" values('Depatamento de Servicio Generales');
insert into "organizational_unit_TELECOM" values('Despacho Ministerial');
insert into "organizational_unit_TELECOM" values('Dirección Administrativa y Financiera');
insert into "organizational_unit_TELECOM" values('Dirección de Apropiación Social del Conocimiento');
insert into "organizational_unit_TELECOM" values('Dirección de Innovación');
insert into "organizational_unit_TELECOM" values('Dirección Gobernanza Digital');
insert into "organizational_unit_TELECOM" values('Dirección Investigación y Desarrollo Tecnológico');
insert into "organizational_unit_TELECOM" values('Secretaría de Planificación Institucional');
insert into "organizational_unit_TELECOM" values('Secretaría de Planificación Institucional(Unidad de Planificación Institucional)');
insert into "organizational_unit_TELECOM" values('Secretaría de Planificación Institucional(Unidad de Planificación Sectorial)');
insert into "organizational_unit_TELECOM" values('Secretaría Técnica de Incentivos');
insert into "organizational_unit_TELECOM" values('Unidad Cooperación Internacional');
insert into "organizational_unit_TELECOM" values('Unidad de Archivo Institucional');
insert into "organizational_unit_TELECOM" values('Unidad de Comunicación');
insert into "organizational_unit_TELECOM" values('Unidad de Servicios Tecnológicos');
insert into "organizational_unit_TELECOM" values('Viceministro de Ciencia, Innovación y Tecnológía');

insert into "post" values('Analista de Auditoría');
insert into "post" values('Analista de Asuntos Jurídicos');
insert into "post" values('Analista de Innovación');
insert into "post" values('Analista de Investigación y Desarrollo Tecnológico');
insert into "post" values('Analista de Proveeduría Institucional');
insert into "post" values('Analista de Proyectos en Gobernanza Digital');
insert into "post" values('Analista de Respuesta de Incidentes Informáticos');
insert into "post" values('Analista de Secretaría Tecnica de Incentivos');
insert into "post" values('Analista Departamento de Gestión Institucional de Recursos Humanos');
insert into "post" values('Analista Departamento de Fortalecimiento de las Capacidades en Ciencia y Tecnólogía');
insert into "post" values('Analista Departamento de Promoción de la Ciencia y Tecnólogía');
insert into "post" values('Analista Financiero');
insert into "post" values('Analista Servicios Generales');
insert into "post" values('Analista Servicios Tecnológicos');
insert into "post" values('Analista Unidad de Planificación Institucional');
insert into "post" values('Analista Unidad de Planificación Sectorial');
insert into "post" values('Asesor');
insert into "post" values('Asistente Despacho');
insert into "post" values('Auditor');
insert into "post" values('Chofer Confianza');
insert into "post" values('Coordinador Comunicación');
insert into "post" values('Coordinador Cooperación Internacional');
insert into "post" values('Coordinador Departamento de Gestión Institucional de Recursos Humanos');
insert into "post" values('Director Administrativo Financiero');
insert into "post" values('Director DASC');
insert into "post" values('Director de Gobernanza Digital');
insert into "post" values('Director Innovación');
insert into "post" values('Encargado Bienes');
insert into "post" values('Encargado de Bodega');
insert into "post" values('Jefe Asuntos Jurídicos');
insert into "post" values('Jefe Auditoría');
insert into "post" values('Jefe de Investigación y Desarrollo Tecnólogico');
insert into "post" values('Jefe Departamento de Fortalecimiento de las Capacidades en Ciencia y Tecnólogia');
insert into "post" values('Jefe Departamento de Gestión Institucional de Recursos Humanos');
insert into "post" values('Jefe Departamento de Promoción de la Ciencia y Tecnólogía');
insert into "post" values('Jefe Despacho');
insert into "post" values('Jefe Financiero');
insert into "post" values('Jefe Proveeduría');
insert into "post" values('Jefe Secretaría Técnica de Incentivos');
insert into "post" values('Jefe Unidad de Planificación Institucional');
insert into "post" values('Jefe Unidad de Planificación Sectorial');
insert into "post" values('Jefe Unidad de Servicios Tecnológicos');
insert into "post" values('Jerarca');
insert into "post" values('Profesional Analista');
insert into "post" values('Operativo');
insert into "post" values('Operativo Proveeduría Institucional');
insert into "post" values('Técnico Archivo Institucional');
insert into "post" values('Técnico de Asuntos Jurídicos');
insert into "post" values('Técnico de Certificaciónes de firma digital');
insert into "post" values('Técnico Departamento de Gestión Institucional de Recursos Humanos');
insert into "post" values('Técnico de Investigación y Desarrollo Tecnológico');
insert into "post" values('Técnico de Secretaría Tecnica de Incentivos');
insert into "post" values('Técnico de Servicios Tecnológicos');
insert into "post" values('Técnico DAF');
insert into "post" values('Técnico Proveeduría Institucional');
insert into "post" values('Viceministro');

insert into "department_TELECOM" values('Despacho del Viceministerio de Telecomunicaciones');
insert into "department_TELECOM" values('Dirección de Espectro Radioeléctrico y Redes de Telecomunicaciones');
insert into "department_TELECOM" values('Departamento de Administración del Espectro Radioeléctrico');
insert into "department_TELECOM" values('Departamento de Redes de Telecomunicaciones');
insert into "department_TELECOM" values('Dirección de Evolución y Mercado de Telecomunicaciones');
insert into "department_TELECOM" values('Departamento de Políticas Públicas de Telecomunicaciones');
insert into "department_TELECOM" values('Departamento de Análisis Económico y Mercados de Telecomunicaciones');
insert into "department_TELECOM" values('Departamento de Evaluación y Seguimiento de Proyectos');
insert into "department_TELECOM" values('Dirección de Concesiones y Normas en Telecomunicaciones');
insert into "department_TELECOM" values('Departamento de Normas y Procedimientos en Telecomunicaciones');
insert into "department_TELECOM" values('Unidad de Control Nacional de Radio');

insert into "department_CIT" values('Asuntos Jurídicos');
insert into "department_CIT" values('Auditoría Interna');
insert into "department_CIT" values('Contraloría de Servicios');
insert into "department_CIT" values('Departamento Financiero');
insert into "department_CIT" values('Departamento de Fortalecimiento de las Capacidades en Ciencia y Tecnología');
insert into "department_CIT" values('Departamento de Gestión Institucional de Recursos Humanos');
insert into "department_CIT" values('Departamento de Promoción de la Ciencia y la Tecnología');
insert into "department_CIT" values('Departamento de Proveduría Institucional');
insert into "department_CIT" values('Departamento de Servicio Generales');
insert into "department_CIT" values('Despacho Ministerial');
insert into "department_CIT" values('Dirección Administrativa y Financiera');
insert into "department_CIT" values('Dirección de Apropiación Social del Conocimiento');
insert into "department_CIT" values('Dirección de Innovación');
insert into "department_CIT" values('Dirección Gobernanza Digital');
insert into "department_CIT" values('Dirección Investigación y Desarrollo Tecnológico');
insert into "department_CIT" values('Secretaría de Planificación Institucional');
insert into "department_CIT" values('Secretaría de Planificación Institucional(Unidad de Planificación Institucional)');
insert into "department_CIT" values('Secretaría de Planificación Institucional(Unidad de Planificación Sectorial)');
insert into "department_CIT" values('Secretaría Técnica de Incentivos');
insert into "department_CIT" values('Unidad Cooperación Internacional');
insert into "department_CIT" values('Unidad de Archivo Institucional');
insert into "department_CIT" values('Unidad de Comunicación');
insert into "department_CIT" values('Unidad de Servicios Tecnológicos');
insert into "department_CIT" values('Viceministro de Ciencia, Innovación y Tecnológía');

select * from "Agreement";

/*Cambios Brit*/

drop table "Goal" cascade;
drop table "Agreement" cascade;

create table "Agreement" (
pk_id_num NUMERIC(10) primary key,
id_fun varchar(50) not null,
name_fun varchar(50) not null,
classs varchar(100) not null,
department varchar(100) not null,
post varchar(100) not null,
adress varchar(50) not null,
year_ev varchar(50) not null,
name_boss varchar(50) not null,
name_period varchar(50) not null,
first_date date not null,
date_eva_first date not null,
final_date date not null,
date_eva_final date not null,
stim varchar(500) not null

);

create table "Goal"(
pk_id_num NUMERIC(10) primary key,
objective varchar(800) not null,
indicator1 varchar(500) not null,
product varchar(500) not null,
percentage numeric not null,
agreedDate varchar(50) not null,
followDate varchar(50),
observations varchar(500),
id_agreement numeric(10)
);

create table "goalsEvaluation80"(
pk_id_num NUMERIC(10) primary key,
id_fun varchar(300),
periodo varchar(20),
objective varchar(800) not null,
indicator1 varchar(500) not null,
product varchar(500) not null,
percentage numeric(10) not null,
compliance numeric(10),
totalobtained numeric(10),
observations1 varchar(500)

);

create table "Evaluation80Totals"(
id_fun varchar(30) not null,
periodo varchar(20) not null,
totalsobtained NUMERIC(10) not null,
totalspercentage NUMERIC(10) not null
);

create table "Evaluation"(
	id_fun varchar(15) not null,
	periodo varchar(20),
	status varchar(20),
	statussign varchar(40),
	evidence varchar(800),
	observationsboss varchar(800),
	observationseva varchar(800),
	status80 varchar(10),
	status20 varchar(10),
	observationsstatus varchar(500),
	interview varchar(15)
);

create or replace function insertGoalsAndEvaluations() returns trigger as $insertGoalsAndEvaluations$
declare
v_id_fun varchar(50);
v_period varchar(50);

begin
insert into "goalsEvaluation80" (pk_id_num, objective, indicator1, product, percentage, compliance, totalobtained, observations1)
values (new.pk_id_num, new.objective, new.indicator1, new.product, new.percentage, 0, 0, '');
select id_fun, year_ev into v_id_fun, v_period from "Agreement" where pk_id_num = new.id_agreement;
update "goalsEvaluation80" set id_fun = v_id_fun, periodo = v_period where pk_id_num = new.pk_id_num;
return new;

end;
$insertGoalsAndEvaluations$ language plpgsql;

create trigger insertGoalsAndEvaluations before insert
on "Goal" for each row
execute procedure insertGoalsAndEvaluations();

/*Cambios vieja*/
create or replace function listarEvaluacionesPen(pk_id numeric)
returns setof "Evaluation" as
$BODY$
declare
vIdFun varchar(30);
reg RECORD;
begin
select id_fun into vIdFun from "Functionary" where pk_id_num = pk_id;
for reg in select * from "Evaluation" where id_fun = vIdFun and status = 'Pendiente' loop
return next reg;
end loop;
for reg in select e.id_fun, e.periodo, e.status, e.statussign, e.evidence, e.observationsboss, e.observationseva, e.status80, e.status20, e.observationsstatus, e.interview from "Evaluation" e
inner join "Functionary" f on f.boss = vIdFun
where f.id_fun = e.id_fun and e.status = 'Pendiente' loop
return next reg;
end loop;

return;
end
$BODY$ language 'plpgsql'

/*Cambios penudo*/
create or replace function existEvaluationIndividualSkills(P_id_fun varchar,
P_period varchar) returns boolean as $$
declare
v_id VARCHAR(20);
v_period VARCHAR(20);
Begin
v_id:='null';
v_period:='null';
select id_fun, periodname into v_id, v_period from "evaluationIndividualSkills" where id_fun=P_id_fun and periodname=P_period;
if v_id is null or v_id='null' and v_period is null or v_period='null' then
return true;
else return false;
end if;
end;
$$ language plpgsql;

/*Cambios penudo termina*/

--dropeo de tablas
drop table "Period" cascade;
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

CREATE or replace FUNCTION showPeriod_by_Period_name(P_period_name varchar)
RETURNS SETOF "Period" AS
$BODY$
DECLARE
    reg RECORD;
BEGIN
    FOR REG IN SELECT * FROM "Period" where pk_period_name = P_period_name LOOP
       RETURN NEXT reg;
    END LOOP;
    RETURN;
END
$BODY$ LANGUAGE 'plpgsql'
select * from showPeriod_by_Period_name('Periodo 2025');

create or replace function exist_period_init() returns boolean as $$
declare 
V_id varchar(30);
 begin
 	select status into V_id from "Period" where status = 'Iniciado';
 	if V_id = 'Iniciado' then 
		return true;
	end if;
	return false;
end;
$$ LANGUAGE plpgsql;
select * from exist_period_init();

create or replace function period_init(P_period_name varchar)
returns boolean as $body$
declare 
V_sta boolean;
begin
	V_sta := exist_period_init();
	if V_sta != true then
		update "Period" set status = 'Iniciado' where pk_period_name = P_period_name;
		return true;
	else 
		return false;
	end if;
exception
    when others then
       return false;
end;
$body$ language plpgsql;

create or replace function period_finish(P_period_name varchar)
returns boolean as $body$
declare 
V_sta varchar(30);
begin
	select status into V_sta from "Period" where pk_period_name = P_period_name;
	if V_sta = 'Iniciado' then
		update "Period" set status = 'Concluido' where pk_period_name = P_period_name;
		return true;
	else 
		return false;
	end if;
exception
    when others then
       return false;
end;
$body$ language plpgsql;

create or replace function period_delete(P_period_name varchar)
returns boolean as $body$
declare 
V_sta varchar(30);
begin
	select pk_period_name into V_sta from "Period" where pk_period_name = P_period_name;
	if V_sta = P_period_name then
		delete from "Period" where pk_period_name = P_period_name;
		return true;
	else 
		return false;
	end if;
exception
    when others then
       return false;
end;
$body$ language plpgsql;

select period_init('Periodo 2029');
select period_finish('Periodo 2029');
select period_delete('Periodo 2029');
update "Period" set status = 'En Diseño' where pk_period_name = 'Periodo 2025';
select * from "Period";

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
/*Cambio Brit*/
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
update "Evaluation" set status = 'Pendiente', statussign = 'Sin Firmar', periodo = new.pk_period_name WHERE periodo IS NULL;

insert into "Period_Funcionarity" (id_fun) select id_fun from "Period_Funcionarity" where pk_period_name = V_aux;
UPDATE "Period_Funcionarity" SET pk_period_name = new.pk_period_name WHERE pk_period_name IS NULL;
end if;
else
V_aux := new.pk_period_name;
insert into "Evaluation" (id_fun) select id_fun from "Functionary";
update "Evaluation" set status = 'Pendiente', statussign = 'Sin Firmar', periodo = new.pk_period_name WHERE periodo IS NULL;

insert into "Period_Funcionarity" (id_fun) select id_fun from "Functionary";
UPDATE "Period_Funcionarity" SET pk_period_name = V_aux WHERE pk_period_name IS NULL;
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
values ('Periodo 2025','2025-10-04','2025-10-10','2025-10-04','2025-10-13',20,80,'Una test');

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
select * from "rubricEvaluation";

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


CREATE TABLE "competencies_adp"(
	fun_id character varying(100) NOT NULL,
    periodo character varying(100),
    item1_auto character varying(20),
    item2_auto character varying(20),
    item3_auto character varying(20),
    item4_auto character varying(20),
    item5_auto character varying(20),
    item6_auto character varying(20),
    item7_auto character varying(20),
    item8_auto character varying(20),
    item9_auto character varying(20),
    item10_auto character varying(20),
    item11_auto character varying(20),
    item12_auto character varying(20),
    item13_auto character varying(20),
    item14_auto character varying(20),
    item15_auto character varying(20),
    item16_auto character varying(20),
    item17_auto character varying(20),
    item18_auto character varying(20),
    item1_chief character varying(20),
    item2_chief character varying(20),
    item3_chief character varying(20),
    item4_chief character varying(20),
    item5_chief character varying(20),
    item6_chief character varying(20),
    item7_chief character varying(20),
    item8_chief character varying(20),
    item9_chief character varying(20),
    item10_chief character varying(20),
    item11_chief character varying(20),
    item12_chief character varying(20),
    item13_chief character varying(20),
    item14_chief character varying(20),
    item15_chief character varying(20),
    item16_chief character varying(20),
    item17_chief character varying(20),
    item18_chief character varying(20)
);

CREATE or replace FUNCTION showPeriod_by_Period_name(P_period_name varchar)
RETURNS SETOF "Period" AS
$BODY$
DECLARE
reg RECORD;
BEGIN
FOR REG IN SELECT * FROM "Period" where pk_period_name = P_period_name LOOP
RETURN NEXT reg;
END LOOP;
RETURN;
END
$BODY$ LANGUAGE 'plpgsql'
select * from showPeriod_by_Period_name('Periodo 2025');



create or replace function exist_period_init() returns boolean as $$
declare
V_id varchar(30);
begin
select status into V_id from "Period" where status = 'Iniciado';
if V_id = 'Iniciado' then
return true;
end if;
return false;
end;
$$ LANGUAGE plpgsql;
select * from exist_period_init();



create or replace function period_init(P_period_name varchar)
returns boolean as $body$
declare
V_sta boolean;
begin
V_sta := exist_period_init();
if V_sta != true then
update "Period" set status = 'Iniciado' where pk_period_name = P_period_name;
return true;
else
return false;
end if;
exception
when others then
return false;
end;
$body$ language plpgsql;



create or replace function period_finish(P_period_name varchar)
returns boolean as $body$
declare
V_sta varchar(30);
begin
select status into V_sta from "Period" where pk_period_name = P_period_name;
if V_sta = 'Iniciado' then
update "Period" set status = 'Concluido' where pk_period_name = P_period_name;
return true;
else
return false;
end if;
exception
when others then
return false;
end;
$body$ language plpgsql;



create or replace function period_delete(P_period_name varchar)
returns boolean as $body$
declare
V_sta varchar(30);
begin
select pk_period_name into V_sta from "Period" where pk_period_name = P_period_name;
if V_sta = P_period_name then
delete from "Period" where pk_period_name = P_period_name;
return true;
else
return false;
end if;
exception
when others then
return false;
end;
$body$ language plpgsql;



