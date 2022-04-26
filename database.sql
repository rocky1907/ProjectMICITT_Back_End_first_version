drop table "User" cascade;
drop table "Stimulus" cascade;
drop table "Functionary" cascade;
drop table "Role" cascade;
drop table "roles_user" cascade;
drop table "job_class_CIT" cascade;
drop table "job_class_TELECOM" cascade;
Drop table "Department_Boss" cascade;

select * from "Functionary";
select * from "User";
select * from "Stimulus";
select * from "Role";
select * from "roles_user";


delete from "User";

create table "Role" (pk_role_name varchar(50) primary key);

create table roles_user(
	id_user NUMERIC(10),
	role_name varchar(50)
);
create table "User" (
	pk_id_num NUMERIC(10) primary key,
	user_name varchar(50) not null, 
	password varchar(50) not null
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
								 'Nacional','Interino','Profesional','Gerencia y Administración','marylin.masis@micit.go.cr','86123456','Activo');

insert into "Functionary" values(2222,'Viceministerio de Ciencia, Innovación y Tecnología','Unidad de Servicios Tecnológicos',105561,'Esteban Alfonso',
								 'Monge Cordero','1-1056-0072','Unidad de Servicios Tecnológicos','Profesional Informática 1-B',
								 'Informática y Computación','','','Analista Servicios Tecnológicos','Nacional','Propiedad','Profesional','Gerencia y Administración',
								 'esteban.monge@micit.go.cr','86546799','Activo');
								 
insert into "Functionary" values(3333,'Viceministerio de Ciencia, Innovación y Tecnología','Unidad de Servicios Tecnológicos',105561,'Rodrigo',
								 'Alemán Gamboa','2-0808-0450','Unidad de Servicios Tecnológicos','Profesional Informática 1-B',
								 'Informática y Computación','','','Analista Servicios Tecnológicos','Nacional','Propiedad','Profesional','Gerencia y Administración',
								 'esteban.monge@micit.go.cr','50022386','Activo');
insert into "Functionary" values(4444,'Viceministerio de Ciencia, Innovación y Tecnología','Unidad de Servicios Tecnológicos',105561,'Rodrigo',
								 'Alemán Gamboa','2-0808-0451','Unidad de Servicios Tecnológicos','Profesional Informática 1-B',
								 'Informática y Computación','','','Analista Servicios Tecnológicos','Nacional','Propiedad','Profesional','Gerencia y Administración',
								 'esteban.monge@micit.go.cr','50022386','Activo');


INSERT INTO "User" VALUES (1111, 'marylin.masis.gonzalez', 'Micitt_465');
INSERT INTO "User" VALUES (3333, 'rodri.ale.gam', 'Micitt_115');
INSERT INTO "User" VALUES (4444, 'rodr2i.a2le.gam2', 'Micitt_6115');

INSERT INTO "User" VALUES (2222, 'esteban.monge.cordero', 'Micitt_561');



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









