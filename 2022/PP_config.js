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
        "defaultValue":"BedfordQualifier",
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
     "Robot": {
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
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999,
        "required":"true"
      },
      "Auto Start Position": {
        "code":"as",
        "title": "Auto Start Position",
        "type":"field_image",
        "filename":"2022/field_image.png"
}
    },
    "auton": {
      "Cones: Missed/Dropped": {
        "code":"acm",
        "title": "Cones: Missed/Dropped",
        "type":"counter"
      },
      "Cones: In Terminal": {
        "code":"act",
        "title": "Cones: In Terminal",
        "type":"counter"
      },
      "Cones: Ground Junction": {
        "code":"agj",
        "title": "Cones: Ground Junction",
        "type":"counter"
      },
      "Cones: Low Junction": {
        "code":"alj",
        "title": "Cones: Low Junction",
        "type":"counter"
      },
      "Cones: Medium Junction": {
        "code":"amj",
        "title": "Cones: Medium Junction",
        "type":"counter"
      },
      "Cones: High Junction": {
        "code":"ahj",
        "title": "Cones: High Junction",
        "type":"counter"
      },
      "Parking Status": {
        "code":"aps",
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
        "code":"asz",
        "title": "Signal Zone",
        "type":"bool"
      },
      "Sleeve Zone": {
        "code":"asl",
        "title": "Sleeve Zone",
        "type":"bool"
      }
    },
    "teleop": {
      "Cones: Missed/Dropped": {
        "code":"tcm",
        "title": "Cones: Missed/Dropped",
        "type":"counter"
      },
      "Cones: In Terminal": {
        "code":"tct",
        "title": "Cones: In Terminal",
        "type":"counter"
      },
      "Cones: Ground Junction": {
        "code":"tgj",
        "title": "Cones: Ground Junction",
        "type":"counter"
      },
      "Cones: Low Junction": {
        "code":"tlj",
        "title": "Cones: Low Junction",
        "type":"counter"
      },
      "Cones: Medium Junction": {
        "code":"tmj",
        "title": "Cones: Medium Junction",
        "type":"counter"
      },
      "Cones: High Junction": {
        "code":"thj",
        "title": "Cones: High Junction",
        "type":"counter"
      }
    },
    "endgame": {
      "Cones: Missed/Dropped": {
        "code":"ecm",
        "title": "Cones: Missed/Dropped",
        "type":"counter"
      },
      "Cones: In Terminal": {
        "code":"ect",
        "title": "Cones: In Terminal",
        "type":"counter"
      },
      "Cones: Ground Junction": {
        "code":"egj",
        "title": "Cones: Ground Junction",
        "type":"counter"
      },
      "Cones: Low Junction": {
        "code":"elj",
        "title": "Cones: Low Junction",
        "type":"counter"
      },
      "Cones: Medium Junction": {
        "code":"emj",
        "title": "Cones: Medium Junction",
        "type":"counter"
      },
      "Cones: High Junction": {
        "code":"ehj",
        "title": "Cones: High Junction",
        "type":"counter"
      },
      "Beacon Capped": {
        "code":"ebc",
        "title": "Sleeve Zone",
        "type":"bool"
      },
      "Circuit Completed": {
        "code":"ecc",
        "title": "Circuit Completed",
        "type":"bool"
      },
      "Parking Status": {
        "code":"eps",
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
        "code":"epj",
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
        "code":"nf",
        "title": "nf",
        "type":"bool"
      },
      "Tipped Over": {
        "code":"to",
        "title": "Tipped",
        "type":"bool"
      },
      "Make good alliance partner?": {
        "code":"ap",
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
        "code":"sar",
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
