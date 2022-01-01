import { INVESTISSEMENT } from './investissement'
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfil'
})
export class SearchfilPipe implements PipeTransform {

  transform(investissements: INVESTISSEMENT[], searchValue: string): INVESTISSEMENT[] {
    if(!investissements || !searchValue ){
      return investissements;
    }
    return investissements.filter(INVESTISSEMENT => 
      INVESTISSEMENT.entreprise?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
      INVESTISSEMENT.id?.toString().toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
      INVESTISSEMENT.titreoperation?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
      INVESTISSEMENT.annee_de_livraison?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
      INVESTISSEMENT.ville?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
      INVESTISSEMENT.mandataire?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
      INVESTISSEMENT.ppi?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
      INVESTISSEMENT.lycee?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
      INVESTISSEMENT.notification_du_marche?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
      INVESTISSEMENT.codeuai?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
      INVESTISSEMENT.longitude?.toString().toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
      INVESTISSEMENT.etat_d_avancement?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
      INVESTISSEMENT.montant_des_ap_votes_en_meu?.toString().toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
      INVESTISSEMENT.cao_attribution?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
      INVESTISSEMENT.latitude?.toString().toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
      INVESTISSEMENT.maitrise_d_oeuvre?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
      INVESTISSEMENT.mode_de_devolution?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
      INVESTISSEMENT.enveloppe_prev_en_meu?.toString().toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
      INVESTISSEMENT.annee_d_individualisation?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
      INVESTISSEMENT.nombre_de_lots?.toString().toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) 
      );
  }
}