function Campo({id, label, type="text", width="flex-1"} : {id: string, label: string, type?: string, width?: string}) {
    return (
        <div className={`flex flex-col ${width}`}>
            <label htmlFor={id}>{label}</label>
            <input
                className="w-full pl-3 py-1 rounded border border-pink-600 focus:outline-0 focus:border-blue-600 focus:shadow-md focus:shadow-blue-200 transition-all"
                type={type}
                id={id}
                name={id}
                placeholder="Digite aqui"
            />
        </div>
    );
}

export default Campo;
