import React, {useState, useEffect} from "react";
import { SafeAreaView, Text, FlatList, ActivityIndicator } from "react-native";
import Config from "../../../config";
import axios from "axios";

const MainScreen = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async () => {
      try {
        const { data: responseData } = await axios.get(Config.API_MAIN_URL);
        setData(responseData);
        setLoading(false);
        console.log(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);

  return (
    <SafeAreaView>
      <Text>{Config.API_URL}</Text>
    </SafeAreaView>
  );
};

export default MainScreen;
