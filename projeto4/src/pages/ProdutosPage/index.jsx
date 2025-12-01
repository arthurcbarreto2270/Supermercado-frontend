import './style.css';

export default function ProdutosPage() {
    return (
        <div className='produtos-container'>
            <h2>Nossos produtos</h2>
            
            <div className="produtos-grid"> {/* Wrapper para a grade */}
                
                {/* Produto 1 */}
                <div className="produto-item">
                    <img src="src/assets/168339-180-180.jpg" alt="Cerveja corona" />
                    <p>Cerveja corona</p>
                    <p className="preco">R$ 5,99</p>
                </div>

                {/* Produto 2 */}
                <div className="produto-item">
                    <img src="src/assets/170583-180-180.jpg" alt="Feijão kicaldo" />
                    <p>Feijão kicaldo</p>
                    <p className="preco">R$ 6,49</p>
                </div>

                {/* Produto 3 */}
                <div className="produto-item">
                    <img src="src/assets/191506-180-180.jpg" alt="Hambuguer de carne bovina" />
                    <p>Hambuguer de carne bovina</p>
                    <p className="preco">R$ 15,90</p>
                </div>

            </div>
        </div>
    );
}