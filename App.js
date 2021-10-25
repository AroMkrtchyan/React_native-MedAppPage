
import React, {useState} from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';

import TitleBlock from "./components/TitleBlock";
import GraphicPage from "./components/GraphicBlock";
import LastReadings from "./components/LastReadings";
import DeletePopup from "./components/DeletePopup";


export default function App() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const [lastReadingsData, setLastReadings] = useState([
        {id:1,
         info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias at beatae harum placeat qui quidem reprehenderit saepe sequi tenetur! Deserunt illum nobis numquam quae quibusdam similique sunt tenetur voluptatibus!',
         date: '23 августа',
         unit: '10.19'},
        {id:2,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                '                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                '                    Accusantium alias at beatae harum placeat qui',
            date: '23 августа',
            unit: '15.3'},
        {id:3,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                '                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                '                    Accusantium alias at beatae harum placeat qui',
            date: '23 августа',
            unit: '7.5'},
    ]);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const popupOpener = (id) => {
        setSelectedItemId(id);
        setIsPopupOpen(!isPopupOpen);
    };
    const deleteLastReadingsItem = () => {
        setLastReadings(lastReadingsData.filter((item) => item.id !== selectedItemId));
        popupOpener();
    };


  return (
    <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <TitleBlock title='Мои показания'/>
            <GraphicPage />
            <LastReadings lastReadingsData={lastReadingsData}
                          title= 'Последние показания'
                          popupOpener={(id) => popupOpener(id)} />
        </ScrollView>
       { isPopupOpen
           ? <DeletePopup popupOpener={popupOpener} deleteLastReadingsItem={deleteLastReadingsItem}/>
           :  null}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8f9',
    paddingVertical : 50,
    padding: 20,
  },
    scrollView: {
        paddingRight: 10,
    },
});
