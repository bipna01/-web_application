export default function Input({lableName,type,placeholder}){
    return(
        <div>
          <lable for="username" className="mt-3 block text-sm">{lableName} </lable>
            <input
          type={type}
          placeholder={placeholder}
          className="border w-full p-2 mb-2"
        />

        </div>
    )
}