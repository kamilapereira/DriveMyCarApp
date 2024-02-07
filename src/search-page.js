import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

const SearchPage = () => {
  const [drivers, setDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);

  // Function to fetch drivers from the API
  const fetchDrivers = async () => {
    try {
      const response = await fetch(
        "https://ea084788-c48e-41e2-a085-74259ed01372.mock.pstmn.io/drivers"
      );
      const data = await response.json();
      setDrivers(data); // Set the fetched drivers in state
    } catch (error) {
      console.error("Error fetching drivers:", error);
      // Handle error if needed
    }
  };

  useEffect(() => {
    fetchDrivers(); // Fetch drivers when the component mounts
  }, []);

  // Function to handle selecting a driver
  const handleSelectDriver = (driverId) => {
    const driver = drivers.find(d => d.id === driverId);
    if (driver) {
      setSelectedDriver(driver);
    } else {
      console.error('Driver not found');
      // Handle the case where the driver isn't found
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontWeight: "bold",
          marginBottom: 30,
          marginTop: 60,
        }}
      >
        Choose your driver:
      </Text>
      <ScrollView style={{ width: "90%", maxHeight: 400 }}>
        {drivers.map((driver) => (
          <View
            key={driver.id}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 20 }}>{driver.firstName}</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#7c00bf",
                padding: 10,
                borderRadius: 5,
              }}
              onPress={() => handleSelectDriver(driver.id)}
            >
              <Text
                style={{ color: "#ffffff", fontWeight: "bold", fontSize: 16 }}
              >
                Pick me
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {selectedDriver && Object.keys(selectedDriver).length > 0 && (
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 10,
              color: "black",
            }}
          >
            Selected Driver Info:
          </Text>
          <Text>
            Name: {selectedDriver.firstName} {selectedDriver.lastName}
          </Text>
          <Text>Phone: {selectedDriver.phone}</Text>
          <Text>Age: {selectedDriver.age}</Text>
          <Text>Address: {selectedDriver.address}</Text>
          <Text>License Type: {selectedDriver.licenseType}</Text>
        </View>
      )}
    </View>
  );
};

export default SearchPage;
