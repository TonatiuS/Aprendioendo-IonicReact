import React from 'react';
import { IonButton, IonIcon, IonContent, IonPage, IonToolbar, IonMenuButton, IonTitle  } from '@ionic/react';
import { calculator } from 'ionicons/icons';
import './Tab2.css';

 const Tab2: React.FC = () => (

  <IonPage>
  <IonToolbar>
            <IonButton slot="start">
              <IonMenuButton/>
            </IonButton>
            <IonTitle>MINI-Menu</IonTitle>
          </IonToolbar>
  <IonContent>
    {/*-- Default --*/}
    <IonButton>Default</IonButton>

    {/*-- Anchor --*/}
    <IonButton href="#">Anchor</IonButton>

    {/*-- Colors --*/}
    {/* <IonButton color="primary">Primary</IonButton>
    <IonButton color="secondary">Secondary</IonButton>
    <IonButton color="tertiary">Tertiary</IonButton>
    <IonButton color="success">Success</IonButton>
    <IonButton color="warning">Warning</IonButton>
    <IonButton color="danger">Danger</IonButton>
    <IonButton color="light">Light</IonButton>
    <IonButton color="medium">Medium</IonButton>
    <IonButton color="dark">Dark</IonButton> */}

    {/*-- Expand --*/}
    <IonButton expand="full">Full Button</IonButton>
    <IonButton expand="block">Block Button</IonButton>

    
    <IonButton shape="round" expand="full" color="success"  href="/page_utilites/page_calculator">
      Calculadora
      <IonIcon slot="end" icon={calculator} />
    </IonButton>

    <IonButton shape="round" expand="full" color="success"  href="/page_utilites/page_todos">
      Tareas
      <IonIcon slot="end" icon={calculator} />
    </IonButton>

  </IonContent>
  
  </IonPage>
  
);

export default Tab2

