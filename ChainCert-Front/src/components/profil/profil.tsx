import { useState } from 'react'
import './profil.scss'

const FormationCard = ({formation}: any) => {
  return (
    <div className="formationCard">
      <img src={"../../public/" + formation.logo} className="formationPicture"/>
      <div>
        {/* <div className="space-between"> */}
          <p className="fontMedium">{formation.name}</p>
          <p className="fontSmall">{formation.date}</p>
        {/* </div> */}
        <p className="fontSmall" >{formation.deliverBy}</p>
      </div>
    </div>
  )
}

const ExperienceCard = ({experience}: any) => {
  return (
    <div className="formationCard">
      <img src={"../../public/" + experience.logo} className="formationPicture"/>
      <div>
        {/* <div className="space-between"> */}
          <p className="fontMedium">{experience.entreprise}</p>
          <p className="fontSmall" >{experience.duree}</p>
        {/* </div> */}
        <p className="fontSmall" >{experience.poste}</p>
      </div>
    </div>
  )
}

const InfoCard = ({isVerified}: any) => {
  return (
    <div className="infoCard">
      <img src="../../public/tezos_baniere.png" className="topImage" />
      <div className="imageWrapper">
        <img src="../../public/Dupont_Moretti.jpg" className="profilPicture"/>
      </div>
      <div className="text-align-center">
        <p className="fontMedium" >
          John Doe
        </p>
        {isVerified && (
          <img src="../../public/verified_badge.png" className="verifiedPicture"/>
        )}
      </div>
      <div className="space-between">
        <p className="fontSmall" >
          PDG de Microsoft
        </p>
        <FollowButton />
      </div>
    </div>
  )
}

const Separator = () => {
  return (
    <div className="separator">
    </div>
  )
}

const FollowButton = () => {
  return (
    <div>
      <button className="followButton">
        Suivre
      </button>
    </div>
  )
}

const AddButton = () => {
  return (
    <div>
      <button className="addButton">
        +
      </button>
    </div>
  )
}

const experiences = [
  {
    entreprise: "Microsoft",
    duree: "2 ans",
    poste: "PDG",
    logo: "Microsoft_logo.png",
  },
  {
    entreprise: "Github",
    duree: "6 mois",
    poste: "Lead Dev",
    logo: "github.png"
  },
  {
    entreprise: "Tezos",
    duree: "1 an",
    poste: "Blockchain Dev",
    logo: "tezos_log.png"
  }
];

const formations = [
  {
    name: "Bac S",
    date: "2015",
    deliverBy: "Lycée de la République",
    logo: "bac.jpg"
  },
  {
    name: "DUT Informatique",
    date: "2017",
    deliverBy: "IUT de Paris",
    logo: "iut.png"
  },
  {
    name: "Master Informatique",
    date: "2019",
    deliverBy: "Université de Paris",
    logo: "iut.png"
  }
]

const Profil = () => {
  const [isVerified, setVerified] = useState<boolean>(true);

  return (
    <div className="profil">
      <div className="profilBlock">
        <InfoCard
          isVerified={isVerified}
        />
      </div>
      <div className="profilBlock">
        <div className="space-between">
          <h2>Formation:</h2>
          <AddButton />
        </div>
        {formations?.map((formation) => (
          <div>
            <FormationCard 
              formation={formation}
            />
          <Separator />
          </div>
        ))}
      </div>
      <div className="profilBlock">
        <div className="space-between">
          <h2>Expériences:</h2>
          <AddButton />
        </div>
          {experiences?.map((experience) => (
            <div>
              <ExperienceCard 
                experience={experience}
              />
              <Separator />
            </div>
          )
          )}
      </div>
    </div>
  )
}

export default Profil;
