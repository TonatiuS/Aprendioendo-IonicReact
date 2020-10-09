import React from 'react';
import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

import './Tab1.css';

const Page1: React.FC = () => {

  return (
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
                  <h1>Bienvenido.name </h1>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
    </IonPage>
  );
};

export default Page1;
