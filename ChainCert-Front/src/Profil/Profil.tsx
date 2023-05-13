import { useState } from 'react'

const QualificationsCard = ({qualifications}: any) => {
  return (
    <div className="qualificationCard">
      <img src="../../public/bac.jpg" className="qualificationPicture"/>
      <div>
        <p className="fontMedium" >nom:</p>
        <p className="fontSmall" >délivré par:</p>
        <p className="fontSmall" >date:</p>
      </div>
    </div>
  )
}

const ExperienceCard = ({experiences}: any) => {
  return (
    <div className="qualificationCard">
      <img src="../../public/Microsoft_logo.png" className="qualificationPicture"/>
      <div>
        <p className="fontMedium" >Entreprise:</p>
        <p className="fontSmall" >Poste:</p>
        <p className="fontSmall" >Durée:</p>
      </div>
    </div>
  )
}

const InfoCard = ({isVerified}: any) => {
  return (
    <div className="infoCard">
      <img src="../../public/tezos_baniere.png" className="topImage" />
      <p className="imageWrapper">
        <img src="../../public/Dupont_Moretti.jpg" className="profilPicture"/>
      </p>
      <div className="text-align-center">
        <p className="fontMedium" >
          John Doe
        </p>
        {isVerified && (
          <img src="../../public/verified_badge.png" className="verifiedPicture"/>
        )}
      </div>
      <p className="fontSmall" >
        PDG de Microsoft
      </p>
    </div>
  )
}

const Separator = () => {
  return (
    <div className="separator">
    </div>
  )
}

const Profil = () => {
  const [qualifications, setQualifications] = useState<any[]>(["1", "2", "3"]);
  const [experiences, setExperiences] = useState<any[]>(["1", "2", "3"]);
  const [isVerified, setVerified] = useState<boolean>(true);

  return (
    <div className="profil">
      <div className="profilBlock">
        <InfoCard
          isVerified={isVerified}
        />
      </div>
      <div className="profilBlock">
        <h4>Qualifications:</h4>
        {qualifications?.map(() => (
          <div>
            <QualificationsCard 
              qualifications={qualifications}
            />
          <Separator />
          </div>
        ))}
      </div>
      <div className="profilBlock">
        <h4>Experience:</h4>
          {experiences?.map(() => (
            <div>
              <ExperienceCard 
                experiences={experiences}
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
