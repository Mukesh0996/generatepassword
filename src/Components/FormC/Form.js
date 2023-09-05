import { useState } from 'react';
import formStyle from './Form.module.css';
import { lowerCaseCharacters, numbers, splChars, upperCaseCharacters } from '../../utils/char';

const Form = () => {

    const [useUpperCase, setUpperCase] = useState(false);
    const [useLowerCase, setLowerCase] = useState(false);
    const [useNumericals, setNumericals] = useState(false);
    const [useSpecialChars, setSpecialChars] = useState(false);
    const [generatedPassword, setGeneratedPassword] = useState("");
    const [passwordLength, setPasswordLength] = useState(10);

    const generatePasswordHandler = (e) => {
            e.preventDefault();
            // console.log("Executing");
        if(!useUpperCase && !useLowerCase && !useNumericals && !useSpecialChars) {

        } else {
            let characterList = "";
            if(useUpperCase) {
                characterList+=upperCaseCharacters;
            } 
            if(useLowerCase) {
                characterList+=lowerCaseCharacters;
            }
            if(useNumericals) {
                characterList+= numbers;
            }
            if(useSpecialChars) {
                characterList+=splChars;
            }
            createPassword(characterList);
        }
    };

    const createPassword = (characterList) => {

        let password = "";

        for(let i =0; i < passwordLength; i++) {
            const characterIndex = Math.round(Math.random() * characterList.length);
            password += characterList.charAt(characterIndex);            
        };
        console.log("generated password", password);
    };

    return <div className={formStyle.formDiv}>
                <h3>Generate Your Password</h3>
                <hr/>
                <div className={formStyle.form_container}>
                    <form className={formStyle.form}>
                        <div className={formStyle.controls}>
                            <div className={formStyle.checkbox_container}>
                                <input id='ucase' type='checkbox' onChange={(e)=> setUpperCase(e.target.checked)} checked={useUpperCase}/>
                                <label htmlFor='ucase' className={formStyle.checkboxLabel}></label>
                            </div>
                            <span className={formStyle.labeltext}>Include Uppercase Characters</span>
                        </div>
                        <div className={formStyle.controls}>
                            <div className={formStyle.checkbox_container}>
                                <input id='lcase' type='checkbox' onChange={(e) => setLowerCase(e.target.checked)} checked={useLowerCase}/>
                                <label htmlFor='lcase' className={formStyle.checkboxLabel}></label>
                            </div>
                            <span className={formStyle.labeltext}>Include Lowercase Characters</span>
                        </div>
                        <div className={formStyle.controls}>
                            <div className={formStyle.checkbox_container}>
                                <input id='nums' type='checkbox' onChange={(e) => setNumericals(e.target.checked)} checked={useNumericals}/>
                                <label htmlFor='nums' className={formStyle.checkboxLabel}></label>
                            </div>
                            <span className={formStyle.labeltext}>Include Numericals</span>
                        </div>
                        <div className={formStyle.controls}>
                            <div className={formStyle.checkbox_container}>
                                <input id='splc' type='checkbox' onChange={(e) => setSpecialChars(e.target.checked)} checked={useSpecialChars}/>
                                <label htmlFor='splc' className={formStyle.checkboxLabel}></label>
                            </div>
                            <span className={formStyle.labeltext}>Include Special Characters</span>
                        </div>
                        <div className={formStyle.form_btn_control} style={{marginBottom:'.5rem', textAlign:'center'}}>
                            <input className={formStyle.passwordLength} type='number' step='1' value={passwordLength} min='8' max='15' onChange={(e) => setPasswordLength(e.target.value)}/>
                            <label> 
                                <span className={formStyle.labeltext}>Set Password Length</span>
                            </label>
                            <div>
                                <span className={formStyle.spanalert}>* Minimum allowed password length is 8, and the maximum length is 15</span>
                            </div>
                        </div>
                        <div className={formStyle.form_btn_control}>
                            <button type='submit' onClick={generatePasswordHandler}>Generate Password</button>
                        </div>
                    </form>
                </div>
    </div>
}

export default Form;