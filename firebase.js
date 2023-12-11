  var config = {
    apiKey: "AIzaSyAalFEIOQpuT0_O28k1s8vnJ-WFbAWNEMU",
    authDomain: "perawatan-burung-otomatis.firebaseapp.com",
    projectId: "perawatan-burung-otomatis",
    storageBucket: "perawatan-burung-otomatis.appspot.com",
    databaseURL: "https://perawatan-burung-otomatis-default-rtdb.firebaseio.com/",
    messagingSenderId: "945095463965",
    appId: "1:945095463965:web:c948793263aba9ad1322f4",
  };


  firebase.initializeApp(config);

  const statusRef = firebase.database().ref('status_pakan');
  const distanceRef = firebase.database().ref('manual_distance');
  const suhuRef = firebase.database().ref('suhu');
  const kelembabanRef = firebase.database().ref('kelembaban');


  function setManualDistance() {
    var manualDistance = document.getElementById('manualDistance').value;
    distanceRef.set(manualDistance);
  }


  function updateStatus() {
    statusRef.once('value').then(function(snapshot) {
      var status = snapshot.val();
      document.getElementById('status').innerText = status;
    });
  }

  updateStatus();


  statusRef.on('value', function(snapshot) {
    updateStatus();
  });

  function updateManualDistance() {
    distanceRef.once('value').then(function(snapshot) {
      var manualDistance = snapshot.val();
      document.getElementById('manualDistance').value = manualDistance;
    });
  }


  updateManualDistance();

  distanceRef.on('value', function(snapshot) {
    updateManualDistance();
  });

  function updateSuhu() {
    suhuRef.once('value').then(function(snapshot){
      var suhu = snapshot.val();
      document.getElementById('suhu').innerText = suhu + '°C';
    });
  }

  updateSuhu();

  suhuRef.on('value', function(snapshot) {
    updateSuhu();
  });


  function updateKelembaban() {
    kelembabanRef.once('value').then(function(snapshot){
      var kelembaban = snapshot.val();
      document.getElementById('kelembaban').innerText = kelembaban + '%';
    }); 
  }

  updateKelembaban();

  kelembabanRef.on('value', function(snapshot) { 
    updateKelembaban();
  });


