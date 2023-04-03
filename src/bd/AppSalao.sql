CREATE SCHEMA IF NOT EXISTS `AppSalao` DEFAULT CHARACTER SET utf8 ;
USE `AppSalao` ;


CREATE TABLE IF NOT EXISTS `AppSalao`.`Empresa` (
  `idEmpresa` INT NOT NULL AUTO_INCREMENT,
  `NomeEmpresa` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idEmpresa`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `AppSalao`.`Usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `LoginUsuario` VARCHAR(45) NOT NULL,
  `SenhaUsuario` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `AppSalao`.`Servicos` (
  `idServicos` INT NOT NULL AUTO_INCREMENT,
  `DescricaoServicos` VARCHAR(45) NOT NULL,
  `PrecoServico` VARCHAR(45) NOT NULL,
  `TempoServico` VARCHAR(45) NOT NULL,
  `Empresa_idEmpresa` INT NOT NULL,
  PRIMARY KEY (`idServicos`),
  INDEX `fk_Servicos_Empresa1_idx` (`Empresa_idEmpresa` ASC) VISIBLE,
  CONSTRAINT `fk_Servicos_Empresa1`
    FOREIGN KEY (`Empresa_idEmpresa`)
    REFERENCES `AppSalao`.`Empresa` (`idEmpresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `AppSalao`.`Profissionais` (
  `idProfissionais` INT NOT NULL AUTO_INCREMENT,
  `NomeProfissional` VARCHAR(45) NOT NULL,
  `Empresa_idEmpresa` INT NOT NULL,
  PRIMARY KEY (`idProfissionais`),
  INDEX `fk_Profissionais_Empresa1_idx` (`Empresa_idEmpresa` ASC) VISIBLE,
  CONSTRAINT `fk_Profissionais_Empresa1`
    FOREIGN KEY (`Empresa_idEmpresa`)
    REFERENCES `AppSalao`.`Empresa` (`idEmpresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `AppSalao`.`Agenda` (
  `idAgenda` INT NOT NULL AUTO_INCREMENT,
  `Data` INT NOT NULL,
  `Horario` VARCHAR(45) NOT NULL,
  `Usuario_idUsuario` INT NOT NULL,
  `Servicos_idServicos` INT NOT NULL,
  `Profissionais_idProfissionais` INT NOT NULL,
  PRIMARY KEY (`idAgenda`),
  INDEX `fk_Agenda_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  INDEX `fk_Agenda_Servicos1_idx` (`Servicos_idServicos` ASC) VISIBLE,
  INDEX `fk_Agenda_Profissionais1_idx` (`Profissionais_idProfissionais` ASC) VISIBLE,
  CONSTRAINT `fk_Agenda_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `AppSalao`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Agenda_Servicos1`
    FOREIGN KEY (`Servicos_idServicos`)
    REFERENCES `AppSalao`.`Servicos` (`idServicos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Agenda_Profissionais1`
    FOREIGN KEY (`Profissionais_idProfissionais`)
    REFERENCES `AppSalao`.`Profissionais` (`idProfissionais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AppSalao`.`Historico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AppSalao`.`Historico` (
  `idHistorico` INT NOT NULL AUTO_INCREMENT,
  `Usuario_idUsuario` INT NOT NULL,
  `Servicos_idServicos` INT NOT NULL,
  `Profissionais_idProfissionais` INT NOT NULL,
  `Agenda_idAgenda` INT NOT NULL,
  PRIMARY KEY (`idHistorico`),
  INDEX `fk_Historico_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  INDEX `fk_Historico_Servicos1_idx` (`Servicos_idServicos` ASC) VISIBLE,
  INDEX `fk_Historico_Profissionais1_idx` (`Profissionais_idProfissionais` ASC) VISIBLE,
  INDEX `fk_Historico_Agenda1_idx` (`Agenda_idAgenda` ASC) VISIBLE,
  CONSTRAINT `fk_Historico_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `AppSalao`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Historico_Servicos1`
    FOREIGN KEY (`Servicos_idServicos`)
    REFERENCES `AppSalao`.`Servicos` (`idServicos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Historico_Profissionais1`
    FOREIGN KEY (`Profissionais_idProfissionais`)
    REFERENCES `AppSalao`.`Profissionais` (`idProfissionais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Historico_Agenda1`
    FOREIGN KEY (`Agenda_idAgenda`)
    REFERENCES `AppSalao`.`Agenda` (`idAgenda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
