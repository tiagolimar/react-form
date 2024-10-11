export function Coleguinha(props : {nome :string, idade:number}) : JSX.Element {
    const {nome, idade} = props;
    return (
        <div className="container shadow-md bg-blue-100 border border-blue-600 rounded w-1/2 mx-auto p-2 divide-y divide-blue-600 text-center hover:bg-blue-200 hover:border-blue-400 cursor-pointer">
            <h3 className="font-semibold  text-blue-900">{nome.split(' ')[0].toUpperCase()}</h3>
            <p className="text-blue-900">Nome: {nome} | Idade: {idade}</p>
        </div>
    )
}