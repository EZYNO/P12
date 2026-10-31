/* pseudocode architecture

analyseDesDepense (depenses, budgetMensuel){
return :
    totaltDesDepense ;
    statutButget,
    memoireCategorie,
    categorieAvecLePlusDeDepense,
    depenseLaPlusEleve,
    butgetRestant,
    nombreDeDepense,
    depenseMoyenne
};

filtreCategorie (){
  return : filtreMemoireCategorie
}

filtreMontantMinimun(){
  return: tableauFiltrer 
}

filtreDate(){
  return: filtreDate
}

ajouterUneDepense(nouvelleDepense){
  return: depenses
}

supprimerUneDepense(aSipprimer){
  return: depenses
}
*/


const budgetMensuel = 30000;

const depenses = [
  {
    id: 1,
    description: "Transport",
    categorie: "Transport",
    montant: 1500,
    date: "2026-10-02"
  },
  {
    id: 2,
    description: "Repas",
    categorie: "Alimentation",
    montant: 2500,
    date: "2026-10-03"
  },
  {
    id: 3,
    description: "Internet",
    categorie: "Communication",
    montant: 5000,
    date: "2026-10-04"
  },
  {
    id: 4,
    description: "Courses",
    categorie: "Alimentation",
    montant: 4000,
    date: "2026-10-06"
  },
  {
    id: 5,
    description: "Déplacement",
    categorie: "Transport",
    montant: 2000,
    date: "2026-10-08"
  },
  {
    id: 6,
    description: "Achat de livres",
    categorie: "Éducation",
    montant: 7500,
    date: "2026-10-10"
  },
  {
    id: 7,
    description: "Forfait téléphonique",
    categorie: "Communication",
    montant: 1500,
    date: "2026-10-12"
  },
  {
    id: 8,
    description: "Dîner",
    categorie: "Alimentation",
    montant: 3000,
    date: "2026-10-15"
  },
  {
    id: 9,
    description: "Abonnement",
    categorie: "Divertissement",
    montant: 3500,
    date: "2026-10-18"
  },
  {
    id: 10,
    description: "Consultation",
    categorie: "Santé",
    montant: 6000,
    date: "2026-10-20"
  }
];

const analyseDesDepense =  (depenses, budgetMensuel) => {
  let totaltDesDepense = 0 ;
  let statutDuButget = null;
  let memoireCategories = {};
  let categorieAvecLePlusDeDepense = null;
  let depenseLaPlusEleve = null;  

  const nombreDeDepense = depenses.length;

  depenses.forEach(depense => {
    if (!memoireCategories[depense.categorie]) {
       memoireCategories[depense.categorie] ={
                nom : depense.categorie,
                depenseTotal: 0,
            }
    }

    memoireCategories[depense.categorie].depenseTotal += depense.montant;

    if (depenseLaPlusEleve === null || depense.montant > depenseLaPlusEleve.montant ) {
      depenseLaPlusEleve = {
            id : depense.id ,
            montant: depense.montant
        }
    }

     totaltDesDepense += depense.montant

  });

  const butgetRestant = budgetMensuel - totaltDesDepense ;
  if (butgetRestant >= 0 ) {
    statutDuButget = "Butget non dépassé" 
  }else {
    statutDuButget = "Butget dépassé"
  }

  const depenseMoyenne = totaltDesDepense / nombreDeDepense ;

  Object.values(memoireCategories).forEach(categorie => {
    if(categorieAvecLePlusDeDepense === null || categorie.depenseTotal > categorieAvecLePlusDeDepense.categorieMontant ){
      categorieAvecLePlusDeDepense = {
                nom: categorie.nom,
                categorieMontant : categorie.depenseTotal
      }
    };

  });

  return{
    totaltDesDepense,
    statutDuButget,
    memoireCategories,
    categorieAvecLePlusDeDepense,
    depenseLaPlusEleve,
    butgetRestant,
    nombreDeDepense,
    depenseMoyenne
  }
};

const rechercheCategories = (depenses, recherche)=>{
const elementsDeLaCategories = depenses.filter(depense => depense.categorie === recherche);
return elementsDeLaCategories;
};

const rechercheMontant = (depenses, montantMinimum) => {
  const montantMinimumArray = depenses.filter(depense => depense.montant >= montantMinimum);
  return montantMinimumArray
};

const rechercheDeLaPeriode = (depenses, debut, fin)=> {
  const periodeDepenses = depenses.filter( depense => debut <= depense.date && depense.date <= fin);
  return periodeDepenses
};

const ajouterUneDepense = (depenses , nouvelleDepense)=>{
   depenses.push(nouvelleDepense);
   return depenses
};
const supprimerUneDepense = (depenses,depsenseASupprimer )=>{
const index = depenses.findIndex(depense => depense.id === depsenseASupprimer );
if(index !== -1){
  depenses.splice(index,1);
}
return depenses;
};

function gestionnaire(depenses, budget, laCategorieRechercher, montantMinimum, debut, fin, nouvelleDepense, depsenseASupprimer){
  const ajouter = ajouterUneDepense(depenses , nouvelleDepense);
  const supprimer = supprimerUneDepense(depenses,depsenseASupprimer);
  const depensesAnalyser = analyseDesDepense(depenses, budget);
  const rechercherUneCategorie = rechercheCategories(depenses, laCategorieRechercher);
  const rechercherUnMontantMinimum = rechercheMontant(depenses, montantMinimum);
  const rechercherUnePeriode = rechercheDeLaPeriode(depenses, debut, fin);
  

  return {
    totaltDesDepense:depensesAnalyser.totaltDesDepense,
    statutDuButget:depensesAnalyser.statutDuButget,
    memoireCategories:depensesAnalyser.memoireCategories,
    categorieAvecLePlusDeDepense:depensesAnalyser.categorieAvecLePlusDeDepense,
    depenseLaPlusEleve:depensesAnalyser.depenseLaPlusEleve,
    butgetRestant:depensesAnalyser.butgetRestant,
    nombreDeDepense:depensesAnalyser.nombreDeDepense,
    depenseMoyenne:depensesAnalyser.depenseMoyenne ,
    rechercherUneCategorie,
    rechercherUnMontantMinimum,
    rechercherUnePeriode,
    ajouter,
  
  }
}

const dep = {
    id: 11,
    description: "Repas",
    categorie: "Alimentation",
    montant: 2500,
    date: "2026-10-03"
  }; 
console.log(gestionnaire(depenses,budgetMensuel,"Alimentation" , 2000, "2026-10-04", "2026-10-15", dep , 6))