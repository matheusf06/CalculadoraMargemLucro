import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lucro: 0, custo_do_item: 0, taxa_de_lucro: 0 }

    this.handleChangeCDI = this.handleChangeCDI.bind(this)
    this.handleChangeTDL = this.handleChangeTDL.bind(this)

  }
  //https://pt.shopify.com/ferramentas/calculadora-margem-de-lucro


  handleChangeCDI = (event) => {
    this.setState({ custo_do_item: event.target.value })
  }

  handleChangeTDL = (event) => {
    this.setState({ taxa_de_lucro: event.target.value })
  }
  
  render() {
    return (
      <div>
        <div class="header">
          <h2>Calculadora de Margem de lucro</h2>
        </div>
        <br />
        <div class="box">
          <label> Custo do Item:</label> &emsp; <label> Taxa de Lucro:</label>
          <br />
          <br />
          <br />
          <t>R$ </t>
          <input type="text" onChange={this.handleChangeCDI.bind(this)} /> &emsp;&emsp;&emsp;
          <input type="text" onChange={this.handleChangeTDL.bind(this)} />
          <t> %</t>
          <br />
          <br />
          <p>Seu lucro será de: R${(parseFloat(this.state.custo_do_item * this.state.taxa_de_lucro) / 100).toLocaleString()}</p>
          <p>O preço de venda será de: R${(parseFloat(this.state.custo_do_item) + parseFloat(this.state.custo_do_item * this.state.taxa_de_lucro) / 100).toLocaleString()}</p>
          <p>A margem bruta de lucro será de: {((parseFloat(this.state.custo_do_item * this.state.taxa_de_lucro) / 100) / (parseFloat(this.state.custo_do_item) + parseFloat(this.state.custo_do_item * this.state.taxa_de_lucro) / 100) * 100).toFixed(2)} %</p>
        </div>
      </div>
    );
  }
}

export default App;
