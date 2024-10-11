import Linha from '../Linha';
import Campo from '../Campo';

function index() {
    const style = [
        "flex",
        "flex-col",
        "justify-center",
        "gap-2",
        "bg-pink-200",
        "rounded",
        "border",
        "border-pink-600",
        "m-8",
        "p-8",
        "pt-4",
        "mx-auto",
        "w-[90%]",
        "md:w-[50%]",
    ]
    return (
        <form className={style.join(' ')}>
            <h1 className="text-2xl font-semibold text-center">
                Cadastro de Pessoa
            </h1>
            <Linha>
                <Campo id="nome" label="Nome Completo" />
                <Campo id="mae" label="Nome da Mãe" />
            </Linha>
            <Linha>
                <Campo
                    id="data"
                    label="Data de Nascimento"
                    type="date"
                    width="w-[9em]"
                />
                <Campo id="email" label="Email" type="email" />
                <Campo id="senha" label="Senha" type="password" />
            </Linha>
            <Linha>
                <Campo id="cep" label="CEP" width="w-[30%]" type="number" />
                <Campo id="endereco" label="Endereço" />
            </Linha>
            <Linha>
                <Campo id="numero" label="Número" width="w-1/5" />
                <Campo id="complemento" label="Complemento" />
            </Linha>
            <Linha>
                <Campo id="bairro" label="Bairro" />
                <Campo id="estado" label="Estado" />
                <Campo id="cidade" label="Cidade" />
            </Linha>
        </form>
    );
}

export default index;
