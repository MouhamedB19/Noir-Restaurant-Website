function Input({label,typeInput,nameInput,valeurMin,valeurMax})
{
    return(
        <>
            <div className="input-item">
                <label htmlFor={label}>{label}</label><br/>
                <input type={typeInput} name={nameInput} className="champ-reservation" min={valeurMin} max={valeurMax} required/>
            </div>
        </>
    );
}

export default Input;