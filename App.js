import React, { Component } from 'react';
import {Text, View, TextInput, Button} from 'react-native';


class SoalSatu extends Component{
  state = { massa: 0, tinggi: 0, hasil: null }

  massa = 0
  tinggi = 0

  
  hitungimt(massa, tinggi) {
    var height = tinggi
    var berat  = massa
    var imt = massa / Math.pow(tinggi, 2)
    var diagnosa = ''
      if (imt < 18.5){
        diagnosa = 'BB Anda Kurang!';
      } else if (imt < 24.9){
        diagnosa = 'BB Anda Ideal!';
      } else if (imt < 29.9){
        diagnosa = 'BB Anda Berlebih!';
      } else if (imt < 39.9){
        diagnosa = 'BB Anda Sangat Berlebih!';
      } else if (imt > 39.9){
        diagnosa = 'Obesitas!';
      } else if (berat == 0 || height == 0 || berat == 0 && height == 0  ) {
        diagnosa = 'Tolong Input Massa dan Tinggi Badan Anda Dengan Benar!';
      }
      return { imt, diagnosa }
  }

  render() {
    return (
      <View style={{ height:'100%', backgroundColor: '#ADD8E6' }}>
        <View style={{ height: 60, backgroundColor: 'blue' }}>
          <Text style={{fontWeight: 'bold', fontSize: 20,color: 'white', textAlign:'center', marginTop:'4%'}}>INDEKS MASSA TUBUH</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10 }}>
          <TextInput style={{ flex: 1 }} onChangeText={(input) => this.massa = input } placeholder='Massa (kg)'/>
          <TextInput style={{ flex: 1 }} onChangeText={(input) => this.tinggi = input / 100 } placeholder='Tinggi (cm)'/>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Button 
            onPress={() => {
              this.setState({
                massa: this.massa,
                tinggi: this.tinggi, 
                hasil: this.hitungimt(this.massa, this.tinggi) 
              })
            }} 
            color='blue' title='Hitung IMT'/>
        </View>
        {
          this.state.hasil ? 
            <View style={{ paddingVertical: 10, alignItems: 'center' }}>
              <View style={ wrapperContent }>            
                <Text style={ contentColor }>Massa Tubuh:</Text>
                <Text style={ contentColor1 }>{ this.state.massa } kg</Text>
              </View>
              <View style={ wrapperContent }>                
                <Text style={ contentColor }>Tinggi Badan:</Text>
                <Text style={ contentColor1 }>{ this.state.tinggi } m</Text>
              </View>
              <View style={ wrapperContent }>
                <Text style={ contentColor }>Indeks Massa Tubuh:</Text>
                <Text style={ contentColor1 }>{ this.state.hasil.imt }</Text>
              </View>
              <View style={ wrapperContent }>
                <Text style={ contentColor }>Diagnosa:</Text>
                <Text style={ contentColor1 }>{ this.state.hasil.diagnosa }</Text>
              </View>
            </View>
          : null
        }
      </View>
    );
  }
}

var wrapperContent = {
  padding: 10, 
  alignItems: 'center'
}

var contentColor = {
  color: 'black'
}

var contentColor1 = {
  color: 'black',
  fontSize: 30,
  fontWeight: 'bold'
  
}

export default SoalSatu;