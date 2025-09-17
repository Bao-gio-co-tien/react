export function Form() {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <form>
            <div>
                <label>Name</label>
                <input type="text" name="name" onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Email</label>
                <input type="email" name="name" onChange={(e) =>setEmail(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">Password</label>
                <input type="password" name="password" onChange={(e) =>setPassword(e.target.value)} />
            </div>
        </form>
    )
}