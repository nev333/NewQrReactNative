import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import DropdownField from '../components/dropDownFields/DropdownField';
import { useToolProvider } from '../contexts/toolContext';

export default function QRScanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [user, setUser] = useState('');
  const [toolData, setToolData] = useState('')
  const [scanned, setScanned] = useState(false);
  const [scanTrigger, setScanTrigger] = useState(false);
 
  const toolScanned = () => {
    setScanTrigger(true)
  }

  // state = {
  //   tool: {data},
  //   name: {user}
  // };



  const updateToolState = () => {
    if (scanned === true) {
      return <Text>Scanned out</Text>
    }
  }

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);



  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    alert (`${data} has been scanned out to ${user}'s profile`);
   
  };

  

  
if (scanned === true) {
    return <Text>This tool has been scanned to {user}'s profile</Text>
}
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

{/* Delete the function below if necessary. I'm trying to display the data from the scan on it */}

  const showData = () => {
      return (
<Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )
  }

  

  return (
    <View style={styles.container}>
    
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        onEvent={toolScanned}
        style={StyleSheet.absoluteFillObject}
        
      />
      <DropdownField 
      label={""}
      placeholder={'Choose User'}
      list={[
        'Greg',
        'Ryan',
        'Rob',
        'Max',
      ]}
      value={user}
      onChange={setUser}
      />
      <DropdownField />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    camera: {
        flex: 1,

    }
}); 