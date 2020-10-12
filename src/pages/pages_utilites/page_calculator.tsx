import React, { useState } from 'react';
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar  } from '@ionic/react';



const CalculatorPage: React.FC = () => {

  //const [text, setText] = useState<string>();

  const [input, setInput] = useState<string>();


 

  function resul(){

    console.log( "antes de la operacion ",input)

   

    console.log("despues de la operacion",  eval(String(input)));

    setInput(eval(String(input)))
    
    
    //setInput("");
      
    // String(eval(input))
  }



    return(
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton/>
            </IonButtons>
            <IonTitle>Sfleet</IonTitle>
          </IonToolbar>
        </IonHeader>
            <IonContent>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <h1>calculadora </h1>
                    <IonItem>
                      <IonLabel position="floating" >Poner los numeros</IonLabel>
                      <IonInput value={input} onIonChange={e =>  setInput((e.detail.value!))}  ></IonInput>
                      {/* <IonInput value={string} onIonChange={e => setString((e.detail.value!))}  ></IonInput> */}
                    </IonItem>

                    <IonItem>
                      <IonLabel> <span className="result"></span> </IonLabel>
                    </IonItem>
                    <IonRow>
                      <IonCol>
                      <IonButton color="danger" size="large" onClick={()=> setInput(input + "+")}>+</IonButton>
                      <IonButton color="danger" size="large" onClick={()=> setInput("-")}> - </IonButton>
                      </IonCol>
                      <IonCol>
                      <IonButton color="danger" size="large" onClick={()=> setInput("*")}>*</IonButton>
                      <IonButton color="danger" size="large" onClick={()=> setInput("/")}>/</IonButton>
                      </IonCol>
                      
                      <IonCol>
                      <IonButton color="danger" expand= "full" size="large" onClick={()=>resul()} >=</IonButton>
                      <IonButton color="danger" expand= "full" size="large" onClick={()=>setInput("")} >AC</IonButton>

                      </IonCol>
                    </IonRow>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonContent>
      </IonPage>
    )

}

export default CalculatorPage