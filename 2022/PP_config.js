var config_data = `
{
  "title":"FTC Power Play Scouting",
  "page_title":"FTC Power Play",
  "elements":{
    "prematch": {
      "Scouter Initials": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":5,
        "required":"true"
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"BedfordQualifer",
        "required":"true",
        "disabled":"true"
      },
      "Match Level":{
        "code":"l",
        "type":"level",
        "choices":{
          "qm":"Quals<br>",
          "ef":"Eighth-Final<br>",
          "qf":"Quarter-Final<br>",
          "sf":"Semi-Final<br>",
          "f":"Final"
        },
        "defaultValue":"qm",
        "required":"true"
      },
      "Match #":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"true"
      },
     "Robot Assigned": {
        "code":"r",
        "type":"robot",
        "choices":{
          "r1":"Red-1",
          "b1":"Blue-1<br>",
          "r2":"Red-2",
          "b2":"Blue-2<br>",         
          "r3":"<s><i>invalid",
          "b3":"<s><i>invalid"
        },
        "required":"true"
      },
      "Auto Start Position": {
        "code":"as",
        "title": "Auto Start Position",
        "type":"radio",
        "choices":{
          "1":"1-Blue-Alliance / Blue-Terminal<br>",
          "2":"2-Blue-Alliance / Red-Terminal<br>",
          "3":"3-Red-Alliance / Blue-Terminal<br>",
          "4":"4-Red-Alliance / Red-Terminal<br>"
        },
        "required":"true"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      }
    },
    "auton": {
      "Cones: Missed/Dropped": {
        "code":"autocmss",
        "title": "Cones: Missed/Dropped",
        "type":"counter"
      },
      "Cones: In Terminal": {
        "code":"autocit",
        "title": "Cones: In Terminal",
        "type":"counter"
      },
      "Cones: Ground Junction": {
        "code":"autocgj",
        "title": "Cones: Ground Junction",
        "type":"counter"
      },
      "Cones: Low Junction": {
        "code":"autoclj",
        "title": "Cones: Low Junction",
        "type":"counter"
      },
      "Cones: Medium Junction": {
        "code":"autocmj",
        "title": "Cones: Medium Junction",
        "type":"counter"
      },
      "Cones: High Junction": {
        "code":"autochj",
        "title": "Cones: High Junction",
        "type":"counter"
      },
      "Parking Status": {
        "code":"autoparkstat",
        "title": "Parking Status",
        "type":"radio",
        "choices":{
          "t":"Terminal<br>",
          "s":"Substation<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      },
      "Signal Zone": {
        "code":"autosignalz",
        "title": "Signal Zone",
        "type":"bool"
      },
      "Sleeve Zone": {
        "code":"autosleevez",
        "title": "Sleeve Zone",
        "type":"bool"
      }
    },
    "teleop": {
      "Cones: Missed/Dropped": {
        "code":"cmss",
        "title": "Cones: Missed/Dropped",
        "type":"counter"
      },
      "Cones: In Terminal": {
        "code":"cit",
        "title": "Cones: In Terminal",
        "type":"counter"
      },
      "Cones: Ground Junction": {
        "code":"cgj",
        "title": "Cones: Ground Junction",
        "type":"counter"
      },
      "Cones: Low Junction": {
        "code":"clj",
        "title": "Cones: Low Junction",
        "type":"counter"
      },
      "Cones: Medium Junction": {
        "code":"cmj",
        "title": "Cones: Medium Junction",
        "type":"counter"
      },
      "Cones: High Junction": {
        "code":"chj",
        "title": "Cones: High Junction",
        "type":"counter"
      }
    },
    "endgame": {
      "Cones: Missed/Dropped": {
        "code":"endcmss",
        "title": "Cones: Missed/Dropped",
        "type":"counter"
      },
      "Cones: In Terminal": {
        "code":"endcit",
        "title": "Cones: In Terminal",
        "type":"counter"
      },
      "Cones: Ground Junction": {
        "code":"endcgj",
        "title": "Cones: Ground Junction",
        "type":"counter"
      },
      "Cones: Low Junction": {
        "code":"endclj",
        "title": "Cones: Low Junction",
        "type":"counter"
      },
      "Cones: Medium Junction": {
        "code":"endcmj",
        "title": "Cones: Medium Junction",
        "type":"counter"
      },
      "Cones: High Junction": {
        "code":"endchj",
        "title": "Cones: High Junction",
        "type":"counter"
      },
      "Beacon Capped": {
        "code":"endbeacon",
        "title": "Sleeve Zone",
        "type":"bool"
      },
      "Circuit Completed": {
        "code":"endcircuit",
        "title": "Circuit Completed",
        "type":"bool"
      },
      "Parking Status": {
        "code":"endparkstat",
        "title": "Parking Status",
        "type":"radio",
        "choices":{
          "t":"Terminal<br>",
          "s":"Substation<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      },
      "Alliance Owned Poles & Junctions (Total)": {
        "code":"endowned",
        "title": "# of Owned Cones",
        "type":"counter"
      }
    },
    "postmatch": {
      "Driver Skill": {
        "code":"ds",
        "title": "Driver Skill",
        "type":"radio",
        "choices":{
          "n":"Not Effective<br>",
          "a":"Average<br>",
          "v":"Very Effective<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x"
      },
      "Speed Rating": {
        "code":"sr",
        "title": "Speed Rating",
        "type":"radio",
        "choices":{
          "1":"1 (slow)<br>",
          "2":"2<br>",
          "3":"3<br>",
          "4":"4<br>",
          "5":"5 (fast)"
        },
        "defaultValue":"3"
      },
      "Had Penalties": {
        "code":"hp",
        "title": "Had Penalties",
        "type":"bool"
      },
      "Non-Functional": {
        "code":"d",
        "title": "nf",
        "type":"bool"
      },
      "Tipped Over": {
        "code":"tipped",
        "title": "Tipped",
        "type":"bool"
      },
      "Make good alliance partner?": {
        "code":"all",
        "title": "Make good alliance partner?",
        "type":"bool"
      },
      "Comments": {
        "code":"co",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":50
      },
      "Scouter's Accuracy Rating <br>(of this data)": {
        "code":"cnf",
        "title": "Accuracy Rating",
        "type":"radio",
        "choices":{
          "v":"Very Good Data<br>",
          "a":"May Have Missed Some Data<br>",
          "n":"Missed A Lot Of Data"
      },
       "defaultValue":"v"
    }
    }
  }
}`;
