# programme de gestion
## Gestion de butget( depenses, budgetMensuel)
- creer :
    totaltDesDepense = 0
    statutButget = null
     memoireCategorie={}
    categorieAvecLePlusDeDepense = null
    depenseLaPlusEleve = null

- calculer nombreDeDepense = depenses.length

- parcourir depenses 
    - pour chaque depense :
        - si memoireCategorie[depense.categorie] n'existe pas :
            memoireCategorie[depense.categorie] ={
                nom : depense.categorie
                depenseTotal : 0,
            }
        - memoireCategorie[depense.categorie].depenseTotal += depense.montant

        - si depenseLaPlusElevee = null ou depense.montant > depenseLaPlusElevee.montant :
        depenseLaPlusElevee = {
            id : depense.id ,
            montant: depense.montant
        }

        - totaltDesDepense += depense.montant

- calculer butgetRestant = budgetMensuel - totaltDesDepense
- si butgetRestant >= 0 :
     statutButget = "Butget non dépassé"
    si non 
    statutButget = "Butget dépassé"

- calculer depenseMoyenne = totaltDesDepense / nombreDeDepense ;


- parcourir memoireCategorie 
    - pour chaque categorie :
        - si categorieAvecLePlusDeDepense === null  ou memoireCategorie[categorie].depenseTotal  > categorieAvecLePlusDeDepense.categorieMontant :
            categorieAvecLePlusDeDepense = {
                nom: categorie.nom,
                categorieMontant : categorie.depenseTotal
            }


- return:
    totaltDesDepense ;
    statutButget,
    memoireCategorie,
    categorieAvecLePlusDeDepense,
    depenseLaPlusEleve,
    butgetRestant,
    nombreDeDepense,
    depenseMoyenne


## recherche de filtre
- creer :
        filtreMemoireCategorie = {}

- parcourir depenses 
    - pour chaque depense :
        - si filtreMemoireCategorie[depense.categorie] n'existe pas :
            filtreMemoireCategorie[depense.categorie] = []
        - ajouter au tableau filtreMemoireCategorie[depense.categorie] = depense.description : depense.montant

- return : filtreMemoireCategorie

## filter en fonction du montant minimum 
- definis un argument montantMini qui represente le montant minimum 
-  parcouri depense avec filter 
    - pour chaque depense : 
         - si depense.montant >= montantMini : conservé la depense 

- return le tableauFiltrer ;

## filtrer en fonction de la date 
- definis deux argument dateDebut et dateFin
- parcourir le tableau depenses avec filter
    - pour chaque depense : si dateDebut <= depense.date <= dateFin :
    conserver cette depense .
- return filtreDate


# Evolution des donnees 
## Ajouter une depense 
- definis un argument depense 
- pour ajouter une depense utiliser la methode .push()sur le tableau depenses ;
- return depenses 
  
## supprimer une depense 
- definis un argument depsenseASupprimer 
- trouver l'index de cette depense dans le tableau depense 
- si l'index est different de -1 :
        retirer du tableau depense l'element dont c'est l'index 

- retur depenses
