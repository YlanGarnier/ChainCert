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

const InfoCard = () => {
  return (
    <div className="infoCard">
      <p className="imageWrapper">
        <img src="../../public/Dupont_Moretti.jpg" className="profilPicture"/>
      </p>
      <p className="fontMedium" >
        John Doe
      </p>
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

  return (
    <div className="profil">
      <div className="profilBlock">
        <InfoCard />
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
