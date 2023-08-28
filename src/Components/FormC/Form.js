import { useState } from 'react';
import formStyle from './Form.module.css';

const Form = () => {

    const [useUpperCase, setUpperCase] = useState(false);
    const [useLowerCase, setLowerCase] = useState(false);
    const [useNumericals, setNumericals] = useState(false);
    const [useSpecialChars, setSpecialChars] = useState(false);


    return <div className={formStyle.formDiv}>
                <h3>Generate Your Password</h3>
                <hr/>
                <div className={formStyle.form_container}>
                    <form className={formStyle.form}>
                        <div className={formStyle.controls}>
                            <div className={formStyle.checkbox_container}>
                                <input id='ucase' type='checkbox' onChange={(e)=> setUpperCase(e.target.checked) } checked={useUpperCase}/>
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
                        <div className={formStyle.form_btn_control}>
                            <button type='submit'>Generate Password</button>
                        </div>
                    </form>
                </div>
    </div>
}

export default Form;