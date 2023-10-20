import React, {Component} from 'react'

class Addition extends Component {
    state = {
        resultat: 0
    }


    additionner = (nombre) =>{
        this.setState(() =>({
            resultat : this.state.resultat + nombre
        }))
    }






    render(){
        return  (
            <div>
                <button 
                    onClick={() => this.additionner(10)}>Additionner 10
                </button>
                <button 
                    onClick={() => this.additionner(20)}>Additionner 20
                </button>
                <h>Résultat: {this.state.resultat}</h>
            </div>
        )
    }
}

export default Addition;