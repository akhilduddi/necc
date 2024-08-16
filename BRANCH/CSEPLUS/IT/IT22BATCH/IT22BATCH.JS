document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 123 || (event.ctrlKey && event.shiftKey && event.keyCode === 73)) {
      event.preventDefault();
  }
});




document.addEventListener('keydown', function(event) {
      // Disable Ctrl+Shift+C
      if (event.ctrlKey && event.shiftKey && event.keyCode === 67) {
          event.preventDefault();
      }
});


document.addEventListener('keydown', function(event) {
  // Disable F12 (Developer Tools)
  if (event.keyCode === 123) {
      event.preventDefault();
  }

  // Disable Ctrl+U (View Source)
  if (event.ctrlKey && event.keyCode === 85) {
      event.preventDefault();
  }

  // Disable Ctrl+Shift+I (Inspect Element)
  if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
      event.preventDefault();
  }

  // Disable Ctrl+Shift+J (Console)
  if (event.ctrlKey && event.shiftKey && event.keyCode === 74) {
      event.preventDefault();
  }

  if (event.ctrlKey && event.keyCode === 85) {
  event.preventDefault();
  }

  // Disable Ctrl+S (Save)
  if (event.ctrlKey && event.keyCode === 83) {
      event.preventDefault();
  }
});
document.addEventListener("DOMContentLoaded", () => {
    const StudentsInfo = document.getElementById("StudentsInfo");

    let StudentsInfoList = [
        // place your data here
    {
      "name": "POTHI REDDY PAVAN KUMAR REDDY",
      "rollNo": "21471A1264",
      "parentNo": 9573144408,
      "studentNo": 9390006708
    },
    
    {
      "name": "ADAKA JAGAPATHI BABU",
      "rollNo": "22471A1201",
      "parentNo": 9701051863,
      "studentNo": 7286821179
    },
    {
      "name": "ADIPUDI WIJAYA WANI",
      "rollNo": "22471A1202",
      "parentNo": 9573597122,
      "studentNo": 7702497356
    },
    {
      "name": "AINALA MALLIKARJUN",
      "rollNo": "22471A1203",
      "parentNo": 9347572199,
      "studentNo": 9052423429
    },
    {
      "name": "ALUGULA EMINEJAR",
      "rollNo": "22471A1204",
      "parentNo": 9603370448,
      "studentNo": 9391149266
    },
    {
      "name": "ANUMULA VIJAYA ARCHITHA",
      "rollNo": "22471A1205",
      "parentNo": 8309545085,
      "studentNo": 9701828350
    },
    {
      "name": "BANDARUPALLI VENKATESWARLU",
      "rollNo": "22471A1206",
      "parentNo": 7729082881,
      "studentNo": 7337058547
    },
    {
      "name": "BHUVANESWARI BANDARU",
      "rollNo": "22471A1207",
      "parentNo": 7075794746,
      "studentNo": 8008818727
    },
    {
      "name": "BODA ESWAR",
      "rollNo": "22471A1208",
      "parentNo": 9652684239,
      "studentNo": 8520889659
    },
    {
      "name": "CHIMATA NANDA KISHOR",
      "rollNo": "22471A1209",
      "parentNo": 9703085228,
      "studentNo": 7569542808
    },
    {
      "name": "CHINTHAKUNTA VHSL DURGA POOJITHA",
      "rollNo": "22471A1210",
      "parentNo": 9949409284,
      "studentNo": 9912310705
    },
    {
      "name": "DASARI NAGESWARI",
      "rollNo": "22471A1211",
      "parentNo": 9581082392,
      "studentNo": 9014238916
    },
    {
      "name": "DASARI SRI SARAN",
      "rollNo": "22471A1212",
      "parentNo": 9949400395,
      "studentNo": 7702349799
    },
    {
      "name": "ELAPROLU VAMSI VARMA",
      "rollNo": "22471A1213",
      "parentNo": 8185862434,
      "studentNo": 9059944209
    },
    {
      "name": "GADDAM SANTHI",
      "rollNo": "22471A1214",
      "parentNo": 9347979724,
      "studentNo": 9390335643
    },
    {
      "name": "GATTA SADVIKA LAKSHMI",
      "rollNo": "22471A1215",
      "parentNo": 8121985474,
      "studentNo": 7396492797
    },
    {
      "name": "GUDUGUNTLA LOKESH",
      "rollNo": "22471A1217",
      "parentNo": 9989523215,
      "studentNo": 9346638840
    },
    {
      "name": "GUNJI SUNEETHA",
      "rollNo": "22471A1218",
      "parentNo": 6300234916,
      "studentNo": 6304132863
    },
    {
      "name": "IMMADISETTY SUBBARAO",
      "rollNo": "22471A1219",
      "parentNo": 8639163993,
      "studentNo": 8639163993
    },
    {
      "name": "KANJULA SUPRAJA",
      "rollNo": "22471A1220",
      "parentNo": 6303462160,
      "studentNo": 7993087563
    },
    {
      "name": "KOLLI VENKATA SAI BHAVANI",
      "rollNo": "22471A1222",
      "parentNo": 9963211418,
      "studentNo": 8096645060
    },
    {
      "name": "KOMMATHOTI MARY",
      "rollNo": "22471A1223",
      "parentNo": 9550255382,
      "studentNo": 9390270817
    },
    {
      "name": "KOPPULA SANGEETHA",
      "rollNo": "22471A1224",
      "parentNo": 7396372021,
      "studentNo": 8074750420
    },
    {
      "name": "KOTHA ANJANI",
      "rollNo": "22471A1225",
      "parentNo": 8179507878,
      "studentNo": 9154272113
    },
    {
      "name": "KURRA TIRUMALA",
      "rollNo": "22471A1226",
      "parentNo": 9440160569,
      "studentNo": 9440160569
    },
    {
      "name": "MAHANKALI MEGHANA",
      "rollNo": "22471A1227",
      "parentNo": 8374646830,
      "studentNo": 9493695465
    },
    {
      "name": "MARELLA GOPI KRISHNA",
      "rollNo": "22471A1228",
      "parentNo": 9000103086,
      "studentNo": 7842467486
    },
    {
      "name": "MEKALA KARTHIK",
      "rollNo": "22471A1229",
      "parentNo": 9985862146,
      "studentNo": 9121060882
    },
    {
      "name": "MERAJOTH BALA KRISHNA NAIK",
      "rollNo": "22471A1230",
      "parentNo": 9866459054,
      "studentNo": 9492962708
    },
    {
      "name": "MIRIYALA MOHAN SIVA PRASAD",
      "rollNo": "22471A1231",
      "parentNo": 9849957921,
      "studentNo": 7569362819
    },
    {
      "name": "MULLAMURI SRILATHA",
      "rollNo": "22471A1232",
      "parentNo": 9948506524,
      "studentNo": 9121845544
    },
    {
      "name": "MUMMANA VEERA VENKATA DURGA PRAKASH",
      "rollNo": "22471A1233",
      "parentNo": 9866552889,
      "studentNo": 9381028889
    },
    {
      "name": "MURARI RADHIKA",
      "rollNo": "22471A1234",
      "parentNo": 8688215329,
      "studentNo": 7671020601
    },
    {
      "name": "NAGALINGAM PHANI ROHITH",
      "rollNo": "22471A1235",
      "parentNo": 9398927883,
      "studentNo": 9398927883
    },
    {
      "name": "NIDAMANURI VENU",
      "rollNo": "22471A1236",
      "parentNo": 6281598008,
      "studentNo": 9959985629
    },
    {
      "name": "PALLAPATI VENKATESH",
      "rollNo": "22471A1237",
      "parentNo": 9618030187,
      "studentNo": 7995283323
    },
    {
      "name": "PANITHAM MADHAVI",
      "rollNo": "22471A1238",
      "parentNo": 9912725631,
      "studentNo": 6303718598
    },
    {
      "name": "PAPANA YALAMANDARAO",
      "rollNo": "22471A1239",
      "parentNo": 7036037590,
      "studentNo": 6301932724
    },
    {
      "name": "PATHAN RASHEED",
      "rollNo": "22471A1240",
      "parentNo": 8121365923,
      "studentNo": 6304310325
    },
    {
      "name": "POKALA RENU SREE",
      "rollNo": "22471A1241",
      "parentNo": 8919475415,
      "studentNo": 8341759809
    },
    {
      "name": "PRATHI PATI ANANDA RAJU",
      "rollNo": "22471A1242",
      "parentNo": 8978264972,
      "studentNo": 9059373610
    },
    {
      "name": "SANGEETH KUMAR KOTTU",
      "rollNo": "22471A1243",
      "parentNo": 9000319134,
      "studentNo": 9063073346
    },
    {
      "name": "SHAIK APPAPURAM FIROZ",
      "rollNo": "22471A1244",
      "parentNo": 9603484788,
      "studentNo": 7416546101
    },
    {
      "name": "SHAIK ISMAIL",
      "rollNo": "22471A1245",
      "parentNo": 6305351663,
      "studentNo": 6305842428
    },
    {
      "name": "SHAIK JAYNUL IRSHAD",
      "rollNo": "22471A1246",
      "parentNo": 9182088517,
      "studentNo": 6301661884
    },
    {
      "name": "SHAIK MINNEKALLU MEHARUNNISA",
      "rollNo": "22471A1247",
      "parentNo": 9985226772,
      "studentNo": 8712134599
    },
    {
      "name": "SHAIK NAGOOR VALI",
      "rollNo": "22471A1248",
      "parentNo": 9701637842,
      "studentNo": 6309649019
    },
    {
      "name": "SHAIK SAIDAVALI",
      "rollNo": "22471A1249",
      "parentNo": 9866696214,
      "studentNo": 9160489100
    },
    {
      "name": "SHAIK SHABEENA",
      "rollNo": "22471A1250",
      "parentNo": 9866708531,
      "studentNo": 9985863370
    },
    {
      "name": "SHAIK SHABNAM",
      "rollNo": "22471A1251",
      "parentNo": 9052502660,
      "studentNo": 9177762640
    },
    {
      "name": "SIDDARAPU CHINA BAJI",
      "rollNo": "22471A1252",
      "parentNo": 9182712503,
      "studentNo": 8074697635
    },
    {
      "name": "THIRUMALASETTY NAGA KALYAN",
      "rollNo": "22471A1253",
      "parentNo": 8106949432,
      "studentNo": 9573428884
    },
    {
      "name": "THOKA NARENDRA",
      "rollNo": "22471A1254",
      "parentNo": 9985985641,
      "studentNo": 9110542405
    },
    {
      "name": "THUMMALAGUNTA SOWJANYA",
      "rollNo": "22471A1255",
      "parentNo": 8187024116,
      "studentNo": 8187024116
    },
    {
      "name": "TURAKA ANANDA BABU",
      "rollNo": "22471A1256",
      "parentNo": 9391702145,
      "studentNo": 9704795001
    },
    {
      "name": "YALAGALA SAMBASIVARAO",
      "rollNo": "22471A1257",
      "parentNo": 9849743472,
      "studentNo": 7075371793
    },
    {
      "name": "YAMALA RAJYA LAKSHMI",
      "rollNo": "22471A1258",
      "parentNo": 9701959389,
      "studentNo": 9618052713
    },
    {
      "name": "GUVVALA THRINADH MAHESH",
      "rollNo": "22471A1259",
      "parentNo": 9491665653,
      "studentNo": 8341451755
    },
    {
      "name": "KOLAGATLA VENKATA SUBBA REDDY",
      "rollNo": "22471A1260",
      "parentNo": 9949182797,
      "studentNo": 9392464683
    },
    {
      "name": "SHAIK MOHAMMAD AASHIK",
      "rollNo": "22471A1261",
      "parentNo": 9440988806,
      "studentNo": 9705838233
    },
    {
      "name": "DUGGEMPUDI ANJI REDDY",
      "rollNo": "22471A1262",
      "parentNo": 7095421639,
      "studentNo": 7093183527
    },
    {
      "name": "BETHA MADHAVA REDDY",
      "rollNo": "22471A1263",
      "parentNo": 9705555349,
      "studentNo": 6304091429
    },
    {
      "name": "SANDIREDDY PURNA GOPI KRISHNA",
      "rollNo": "22471A1264",
      "parentNo": 9703389349,
      "studentNo": 9392466216
    },
    {
      "name": "JARUGUMALLI SANJAY VARMA",
      "rollNo": "22471A1265",
      "parentNo": 9705580150,
      "studentNo": 9392529776
    },
    {
      "name": "SEELAM SASIDHAR",
      "rollNo": "22471A1266",
      "parentNo": 7989428834,
      "studentNo": 8688767078
    },
    {
      "name": "SHAIK KUNDURTHI KHASIM",
      "rollNo": "23475A1201",
      "parentNo": 7981375049,
      "studentNo": 9963287835
    },
    {
      "name": "KATTULA SASIDHAR SAI",
      "rollNo": "23475A1202",
      "parentNo": 8500625382,
      "studentNo": 9849825382
    },
    {
      "name": "SHAIK USMAN SHARIF",
      "rollNo": "23475A1203",
      "parentNo": 9505334531,
      "studentNo": 7981613795
    },
    {
      "name": "KORA MOUNISH",
      "rollNo": "23475A1204",
      "parentNo": 8179933891,
      "studentNo": 7093595496
    },
    {
      "name": "MYSORE SAITEJA",
      "rollNo": "23475A1205",
      "parentNo": 9502053398,
      "studentNo": 7702552758
    },
    {
      "name": "YARRAMSETTI SRIKIRAN SAI",
      "rollNo": "23475A1206",
      "parentNo": 9951184377,
      "studentNo": 9381503022
    }

    ];

    
        const searchContainer = document.createElement("div");
        searchContainer.classList.add("search-container", "fixed-top");
    
        const searchInput = document.createElement("input");
        searchInput.type = "text";
        searchInput.placeholder = "Enter Roll Number";
        searchInput.classList.add("search-input");  
        searchContainer.appendChild(searchInput);
    
        StudentsInfo.insertBefore(searchContainer, StudentsInfo.firstChild);
    
        function getFormattedDate() {
            const now = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
            return now.toLocaleDateString(undefined, options);
        }
    
        function createStudentCard(student) {
            const card = document.createElement("div");
            card.classList.add("card", "student-card");
            card.dataset.rollNo = student.rollNo;
    
            const infoDiv = document.createElement("div");
            infoDiv.classList.add("info");
    
            const imageDiv = document.createElement("div");
            imageDiv.classList.add("image-div");
    
            const image = document.createElement("img");
            image.src = student.imageUrl ? student.imageUrl : "https://res.cloudinary.com/dfl09yw03/image/upload/c_crop,g_auto,h_800,w_800/n98sq90nqivjiio1bmho.jpg";
            image.alt = student.name;
            image.classList.add("card-img-top", "mb-3");
            imageDiv.appendChild(image);
    
            const textContainer = document.createElement("div");
            textContainer.classList.add("text-container");
    
            const name = document.createElement("h5");
            name.textContent = student.name;
            name.classList.add("card-title");
            textContainer.appendChild(name);
    
            const rollNumber = document.createElement("p");
            rollNumber.textContent = student.rollNo;
            rollNumber.classList.add("card-text", "mb-3");
            textContainer.appendChild(rollNumber);
    
            infoDiv.appendChild(imageDiv);
            infoDiv.appendChild(textContainer);
    
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body", "mb-3");
    
            const buttonsDiv = document.createElement("div");
            buttonsDiv.classList.add("buttons");
    
            const studentButtonsDiv = document.createElement("div");
            studentButtonsDiv.classList.add("student-buttons");
    
            const callStudentButton = document.createElement("button");
            callStudentButton.textContent = student.studentNo ? "Call Student" : "No Student Phone";
            callStudentButton.disabled = !student.studentNo;
            callStudentButton.classList.add("btn", "btn-primary");
            if (!student.studentNo) {
                callStudentButton.classList.add("button-disabled");
            } else {
                callStudentButton.onclick = () => {
                    window.location.href = `tel:+91${student.studentNo}`;
                };
            }
            studentButtonsDiv.appendChild(callStudentButton);
    
            const messageStudentButton = document.createElement("button");
            messageStudentButton.textContent = student.studentNo ? "Message Student" : "No Student Phone";
            messageStudentButton.disabled = !student.studentNo;
            messageStudentButton.classList.add("btn", "btn-primary");
            if (!student.studentNo) {
                messageStudentButton.classList.add("button-disabled");
            } else {
                messageStudentButton.onclick = () => {
                    const message = `You are ${student.name} (${student.rollNo}) absent for the ${getFormattedDate()} ~staff of NARASARAOPETA ENGINEERING COLLEGE`;
                    window.location.href = `sms:+91${student.studentNo}?body=${encodeURIComponent(message)}`;
                };
            }
            studentButtonsDiv.appendChild(messageStudentButton);
    
            const parentButtonsDiv = document.createElement("div");
            parentButtonsDiv.classList.add("parent-buttons");
    
            const callParentButton = document.createElement("button");
            callParentButton.textContent = student.parentNo ? "Call Parent" : "No Parent Phone";
            callParentButton.disabled = !student.parentNo;
            callParentButton.classList.add("btn", "btn-primary");
            if (!student.parentNo) {
                callParentButton.classList.add("button-disabled");
            } else {
                callParentButton.onclick = () => {
                    window.location.href = `tel:+91${student.parentNo}`;
                };
            }
            parentButtonsDiv.appendChild(callParentButton);
    
            const messageParentButton = document.createElement("button");
            messageParentButton.textContent = student.parentNo ? "Message Parent" : "No Parent Phone";
            messageParentButton.disabled = !student.parentNo;
            messageParentButton.classList.add("btn", "btn-primary");
            if (!student.parentNo) {
                messageParentButton.classList.add("button-disabled");
            } else {
                messageParentButton.onclick = () => {
                    const message = `Your ward ${student.name} (${student.rollNo}) is absent for the ${getFormattedDate()} ~staff of NARASARAOPETA ENGINEERING COLLEGE`;
                    window.location.href = `sms:+91${student.parentNo}?body=${encodeURIComponent(message)}`;
                };
            }
            parentButtonsDiv.appendChild(messageParentButton);
    
            buttonsDiv.appendChild(studentButtonsDiv);
            buttonsDiv.appendChild(parentButtonsDiv);
    
            cardBody.appendChild(buttonsDiv);
            card.appendChild(infoDiv);
            card.appendChild(cardBody);
    
            StudentsInfo.appendChild(card);
        }
    
        function filterStudents() {
            const rollNumber = searchInput.value.trim().toLowerCase();
            const cards = document.querySelectorAll('.student-card');
    
            cards.forEach(card => {
                const cardRollNo = card.dataset.rollNo.toLowerCase();
                card.style.display = rollNumber === "" || cardRollNo.includes(rollNumber) ? "flex" : "none";
            });
        }
    
        StudentsInfoList.forEach(createStudentCard);
    
        searchInput.addEventListener("input", filterStudents);
    });
    