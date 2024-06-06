import ListarProdutos from "../../componets/produtos/listarprodutos/ListarProdutos"
import ModalProduto from "../../componets/produtos/modalprodutos/ModalProdutos"

function Home() {
    return (
        <>
            <div className="
                bg-slate-800 
                flex 
                justify-center
                ">
                <div className='
                    container 
                    grid 
                    grid-cols-2 
                    text-white
                    '>
                    <div className="
                        flex 
                        flex-col 
                        gap-4 
                        items-center 
                        justify-center 
                        py-4
                        ">
                        <h2 className='
                            text-5xl 
                            font-bold
                            text-center'>
                            Seja bem vindo, a sua loja de games!
                        </h2>
                        <p className='text-xl'>Aqui você encontra os melhores Games!</p>

                        <div className="flex justify-around gap-4">
                            <button className='
                                    rounded
                                    bg-slate-800 
                                    text-white 
                                    py-2 
                                    px-4
                                    '>
                                <ModalProduto />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/mnz3yzqzot/oie_transparent%20(8).png?updatedAt=1717600670017"
                            alt="Imagem Página Home"
                            className='w-3/6'
                        />
                    </div>
                </div>
            </div>
            <ListarProdutos />
        </>
    )
}

export default Home