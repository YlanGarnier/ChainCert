import React, { useState } from 'react';
import './form.scss'

const FormInputLabel = ({name, text, state, setState}
  : {name: string, text: string, state:any, setState: any}): JSX.Element => {
  return (
    <>
      <label for={name} className="formLabel">
        {text}
      </label>
      <input
        onChange={(e) => {setState(e.currentTarget.value.toString())}}
        placeholder={`Type ${text.toLowerCase()} here...`}
        name={name}
        id={name}
        value={state && state}
        type={name === "graduationYear" | name === "startYear" || name === "endYear" ? "date" : "text"}
        className="formInput"
      />
    </>
  )
}

const Form = ({storage, userAddress, contract, contractAddress}: {storage: any, userAddress: string | null, contract: any, contractAddress: string}): JSX.Element => {
  const [documentSelect, setDocumentSelect] = useState<"Diploma" | "Work experience">('Diploma')
  const [publicKey, setPublicKey] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [comment, setComment] = useState<string>('')
  const [startYear, setStartYear] = useState<Date>('')
  const [endYear, setEndYear] = useState<string>('') // also year of graduation
  const [job, setJob] = useState<"Job 1" | "Job 2" | "Job 3" | "...">('Job 1')

  async function handleSubmitDiploma() {
    const output = `publicKey:${publicKey}\n`
    + `firstName:${firstName}\n`
    + `lastName:${lastName}\n`
    + `graduationYear:${endYear}\n`
    + `comment:${comment}\n`

    if (userAddress) {
      const op = await contract.methods.createForm(`${firstName} ${lastName}`, userAddress, output, publicKey).send();
      op.confirmation();
    }
  }
  async function handleSubmitWorkExperience() {
    const output = `publicKey:${publicKey}\n`
    + `firstName:${firstName}\n`
    + `lastName:${lastName}\n`
    + `startYear:${startYear}\n`
    + `endYear:${endYear}\n`
    + `job:${job}\n`
    + `comment:${comment}\n`

    if (userAddress) {
      const op = await contract.methods.createForm(`${firstName} ${lastName}`, userAddress, output, publicKey).send();
      op.confirmation();
    }
  }

  const DiplomaForm = (): JSX.Element => {
    return (<FormInputLabel name="graduationYear" text="Graduation year" state={endYear} setState={setEndYear}/>)
  }

  const WorkExperienceForm = (): JSX.Element => {
    return (
      <>
        <FormInputLabel name="startYear" text="Start year" state={startYear} setState={setStartYear}/>
        <FormInputLabel name="endYear" text="End year" state={endYear} setState={setEndYear}/>
        <label for="selectJob" className="formLabel">
          Select a job
        </label>
        <select
          required
          id="selectJob"
          name="selectJob"
          className="formDocumentSelect"
          value={job}
          onChange={(e) => {setJob(e.currentTarget.value)}}
        >
          <option>
            Job 1
          </option>
          <option>
            Job 2
          </option>
          <option>
            Job 3
          </option>
          <option>
            ...
          </option>
        </select>
      </>
    )
  }

  return (
    <form className="roundBox">
      <div>
        <h1 className="formTitle">
          Deliver a document
        </h1>
        <label for="publicKey" className="formLabel">
          Selecte a document
        </label>
        <select
          required
          id="selectDocument"
          name="selectDocument"
          className="formDocumentSelect"
          onChange={(e) => {setDocumentSelect(e.currentTarget.value)}}
        >
          <option>
            Diploma
          </option>
          <option>
            Work experience
          </option>
        </select>
        <FormInputLabel name="publicKey" text="Public key" setState={setPublicKey}/>
        <FormInputLabel name="firstName" text="First name" setState={setFirstName}/>
        <FormInputLabel name="lastName" text="Last name" setState={setLastName}/>
        {documentSelect == "Diploma" && <DiplomaForm />}
        {documentSelect == "Work experience" && <WorkExperienceForm />}
        <label for="name" className="formLabel">
          Comment
        </label>
        <textarea
          onChange={(e) => {setComment(e.currentTarget.value)}}
          placeholder="Write a comment here..."
          name="comment"
          id="comment"
          type="text"
          className="formInput formComment"
        />
        <button
          type="button"
          onClick={documentSelect === "Diploma" ? handleSubmitDiploma : documentSelect === "Work experience" && handleSubmitWorkExperience}
          className="formButton"
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default Form;
