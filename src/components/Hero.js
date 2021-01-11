
// class que dependendo da class sendo renderizada chama um dos dois componentDidMount alteradno a class e dando um intervalo. Com isso tenho uma mudança de background(className) a cada 10 segundos.


// import React from "react"

// class Hero extends React.Component {
//     constructor() {
//         super()
//         this.state= {
//             backgroundClass: "hero"
//         }
//     }


//     componentDidMount1() {
//         setTimeout(() => {
//             this.setState(
//                 {
                   
//                    backgroundClass: "hero2" 
//                 }
//             )
//         }, 10000)
//     }


//     componentDidMount2() {
//         setTimeout(() => {
//             this.setState(
//                 {
                   
//                    backgroundClass: "hero" 
//                 }
//             )
//         }, 10000)
//     }

//     render(){

//         if (this.state.backgroundClass === "hero"){
//             this.componentDidMount1()
//         }

//         else{
//             this.componentDidMount2()
//         }
//         console.log(this.state.backgroundClass)
//         return(

//             <section className={this.state.backgroundClass}>
//                 <div className = "hero-text">
//                     <h1 className="hero-text-1">
//                         Samb
//                     </h1>
//                     <h1 className = "hero-text-2">
//                         Ipsum
//                     </h1>
//                     <h2>
//                         Lore Ipsum pra quem não é ruim 
//                     </h2>
//                     <h2>
//                     da cabeça e nem doente do pé
//                     </h2>
    
//                 </div>
                
//             </section>
                    
           
//         )

//     }
// }

// export default Hero



import React from "react"

// Função recebendo o props com o valor da classe que variou a cada aperto do botão gerar. Com isSecureContext, mudo a class do hero, mudando a imagem de background

function Hero(props) {

    // console.log("props recebido: ", props.changeHero)

    let heroFinal = props.changeHero

    // console.log("heroFinal: ", heroFinal)
    

   

    
    

    

        

        
        return(

            <section className={heroFinal}>
                <div className = "hero-text">
                    <div className = "titulo">
                        <h1 className="hero-text-1">
                            Samba
                        </h1>
                        <h1 className = "hero-text-2">
                            Ipsum
                        </h1>
                    </div>
                    <h2>
                        Lorem Ipsum pra quem não é ruim 
                    </h2>
                    <h2>
                    da cabeça e nem doente do pé
                    </h2>
    
                </div>
                
            </section>
                    
           
        )

    
}

export default Hero