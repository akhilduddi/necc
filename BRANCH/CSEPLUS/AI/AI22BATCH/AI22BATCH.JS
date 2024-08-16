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
        "name": "SHAIK GOUSE PEER",
        "rollNo": "21471A4351",
        "parentNo": 7981573116,
        "studentNo": 7981573116
      },
      {
        "name": "ADAPALA NAVYA",
        "rollNo": "22471A4301",
        "parentNo": 7702827224,
        "studentNo": 8019473585
      },
      {
        "name": "AISHA SULEIMAN SHAIK",
        "rollNo": "22471A4302",
        "parentNo": 7893387534,
        "studentNo": 7680965178
      },
      {
        "name": "AKULA RAKESH GANGADHAR RAO",
        "rollNo": "22471A4303",
        "parentNo": 9059381520,
        "studentNo": 9014500280
      },
      {
        "name": "ANNAMRAJU VENKATA KRISHNA SASIDHAR",
        "rollNo": "22471A4304",
        "parentNo": 8008506183,
        "studentNo": 9121806183
      },
      {
        "name": "SYED ASADULLAH",
        "rollNo": "22471A4305",
        "parentNo": 9059821856,
        "studentNo": 9059975498
      },
      {
        "name": "AVULA JYOTHI",
        "rollNo": "22471A4306",
        "parentNo": 7893009512,
        "studentNo": 7032902858
      },
      {
        "name": "BATTINI NAGA SARAN TEJA",
        "rollNo": "22471A4307",
        "parentNo": 9014500280,
        "studentNo": 9059381520
      },
      {
        "name": "BITRA JASWANTH KUMAR",
        "rollNo": "22471A4308",
        "parentNo": 7013094057,
        "studentNo": 7013094057
      },
      {
        "name": "BOMMANABOYINA AFRIN",
        "rollNo": "22471A4309",
        "parentNo": 9703968745,
        "studentNo": 9032393841
      },
      {
        "name": "BOMMU JOHN JASHUVA",
        "rollNo": "22471A4310",
        "parentNo": 9642772859,
        "studentNo": 9063095027
      },
      {
        "name": "CHAKKA NARENDRA KUMAR",
        "rollNo": "22471A4311",
        "parentNo": 9704402759,
        "studentNo": 9347954790
      },
      {
        "name": "CHALUVADI VENKATA SAI PRAVEEN",
        "rollNo": "22471A4312",
        "parentNo": 7075634144,
        "studentNo": 7670947943
      },
      {
        "name": "CHILAKA MAHESH",
        "rollNo": "22471A4313",
        "parentNo": 9912566488,
        "studentNo": 6303699047
      },
      {
        "name": "CHINNABATHUNI MARY PAVITHRA",
        "rollNo": "22471A4314",
        "parentNo": 9985188509,
        "studentNo": 6301715793
      },
      {
        "name": "DARSI NAGAVENKATA TIRUMALASAI SAILESHKUMAR",
        "rollNo": "22471A4315",
        "parentNo": 9989918861,
        "studentNo": 9100425378
      },
      {
        "name": "DASARI DHARANI",
        "rollNo": "22471A4316",
        "parentNo": 7799312459,
        "studentNo": 9177521848
      },
      {
        "name": "DEVISETTY ESWAR VEERA VASANTH KUMAR",
        "rollNo": "22471A4317",
        "parentNo": 9985036887,
        "studentNo": 8367743872
      },
      {
        "name": "DEVISETTY JAYANTH",
        "rollNo": "22471A4318",
        "parentNo": 9885193134,
        "studentNo": 7569773738
      },
      {
        "name": "GANDRAKOTA VENKATA GOPI VARA PRASAD",
        "rollNo": "22471A4319",
        "parentNo": 7997685032,
        "studentNo": 9676147962
      },
      {
        "name": "KAKKERA GANGOTRI",
        "rollNo": "22471A4320",
        "parentNo": 9908661941,
        "studentNo": 7660802809
      },
      {
        "name": "GOPAVARAPU RAMA KRISHNA PRASAD",
        "rollNo": "22471A4321",
        "parentNo": 8341372648,
        "studentNo": 9989560090
      },
      {
        "name": "GORANTLA UMAMAHESWARA RAO",
        "rollNo": "22471A4322",
        "parentNo": 8143611831,
        "studentNo": 7981972361
      },
      {
        "name": "JANGALA AVEELA",
        "rollNo": "22471A4323",
        "parentNo": 7675964558,
        "studentNo": 8919185126
      },
      {
        "name": "JUTOORI HARISH BABU",
        "rollNo": "22471A4324",
        "parentNo": 9618292627,
        "studentNo": 8978911413
      },
      {
        "name": "KADIYALA KOMALI",
        "rollNo": "22471A4325",
        "parentNo": 8688934558,
        "studentNo": 7396701643
      },
      {
        "name": "KALUPUKURI SANTHOSH KUMAR",
        "rollNo": "22471A4326",
        "parentNo": 9505730706,
        "studentNo": 9652395063
      },
      {
        "name": "KANCHARLA AKHILESWAR",
        "rollNo": "22471A4327",
        "parentNo": 9985856716,
        "studentNo": 9959159551
      },
      {
        "name": "KOMIRISETTY VENKATA SUMANTH KUMAR",
        "rollNo": "22471A4328",
        "parentNo": 9573980472,
        "studentNo": 7731953205
      },
      {
        "name": "KOSANA VENKATA NAVADHEER",
        "rollNo": "22471A4329",
        "parentNo": 9030341008,
        "studentNo": 6300959478
      },
      {
        "name": "LINGALA RAJASEKHAR",
        "rollNo": "22471A4330",
        "parentNo": 9440013379,
        "studentNo": 9948923379
      },
      {
        "name": "MANUKONDA SAI SUDHEER",
        "rollNo": "22471A4331",
        "parentNo": 9642502543,
        "studentNo": 9505813015
      },
      {
        "name": "MARRIPALLI PAVANI",
        "rollNo": "22471A4332",
        "parentNo": 7661066260,
        "studentNo": 9515558614
      },
      {
        "name": "MATTUPALLI VENKATA HARIISH",
        "rollNo": "22471A4333",
        "parentNo": 9885852501,
        "studentNo": 7981401449
      },
      {
        "name": "SHAIK MOHAMMAD MUBEEN",
        "rollNo": "22471A4334",
        "parentNo": 9985036887,
        "studentNo": 8639048925
      },
      {
        "name": "MORTHA SAGARI",
        "rollNo": "22471A4335",
        "parentNo": 8985264358,
        "studentNo": 8978098569
      },
      {
        "name": "MOTUPALLI SASANTH",
        "rollNo": "22471A4336",
        "parentNo": 9948951813,
        "studentNo": 8247023914
      },
      {
        "name": "MUNNANGI VENKATA NIKHIL REDDY",
        "rollNo": "22471A4337",
        "parentNo": 9959951355,
        "studentNo": 9032482004
      },
      {
        "name": "MUVVA SAI BHARATH",
        "rollNo": "22471A4338",
        "parentNo": 9966247900,
        "studentNo": 7993582158
      },
      {
        "name": "NAMALA GOVARDHANI",
        "rollNo": "22471A4339",
        "parentNo": 94949807596,
        "studentNo": 8978996180
      },
      {
        "name": "DUGGEPOGU RAJU",
        "rollNo": "22471A4340",
        "parentNo": 6305506970,
        "studentNo": 7780271257
      },
      {
        "name": "PALETI RAJENDRA",
        "rollNo": "22471A4341",
        "parentNo": 9347026004,
        "studentNo": 9177019459
      },
      {
        "name": "PARCHURI PRAVEEN KUMAR",
        "rollNo": "22471A4342",
        "parentNo": 9666705712,
        "studentNo": 9391952344
      },
      {
        "name": "PATHAKAMURI DHARANI",
        "rollNo": "22471A4343",
        "parentNo": 7337304766,
        "studentNo": 9381968658
      },
      {
        "name": "POPURI NARAPA REDDY",
        "rollNo": "22471A4344",
        "parentNo": 9989139957,
        "studentNo": 6305759257
      },
      {
        "name": "RAMISETTY LIKHITHA",
        "rollNo": "22471A4345",
        "parentNo": 9908612466,
        "studentNo": 9618041277
      },
      {
        "name": "SARILLA JAYA VIJAYA",
        "rollNo": "22471A4346",
        "parentNo": 9848168261,
        "studentNo": 9030968261
      },
      {
        "name": "SHAIK HUSSAIN VALI",
        "rollNo": "22471A4347",
        "parentNo": 7095006405,
        "studentNo": 9550141751
      },
      {
        "name": "SHAIK PODILE KHAJA KHASIM",
        "rollNo": "22471A4348",
        "parentNo": 9963031092,
        "studentNo": 9391972697
      },
      {
        "name": "SHAIK RAMEEZ BASHA",
        "rollNo": "22471A4349",
        "parentNo": 9490639947,
        "studentNo": 6301208580
      },
      {
        "name": "SHAIK RESHMA",
        "rollNo": "22471A4350",
        "parentNo": 7036404463,
        "studentNo": 9381981415
      },
      {
        "name": "SHAIK SAHEDA",
        "rollNo": "22471A4351",
        "parentNo": 9985372161,
        "studentNo": 9346169565
      },
      {
        "name": "SYAMALA NIKITH VEERA REDDY",
        "rollNo": "22471A4352",
        "parentNo": 7793998664,
        "studentNo": 9703257519
      },
      {
        "name": "VANIPENTA CHAITANYA",
        "rollNo": "22471A4353",
        "parentNo": 9963577148,
        "studentNo": 9642768516
      },
      {
        "name": "VENKATA SRIVALLIKA MANDALAPU",
        "rollNo": "22471A4354",
        "parentNo": 9959952238,
        "studentNo": 9666290345
      },
      {
        "name": "YAKKANTI MALLIKARJUNA REDDY",
        "rollNo": "22471A4355",
        "parentNo": 9640989724,
        "studentNo": 9642251993
      },
      {
        "name": "YARRA VENKATESH",
        "rollNo": "22471A4356",
        "parentNo": 9908565839,
        "studentNo": 8074036857
      },
      {
        "name": "YEMINENI MEENAKSHI",
        "rollNo": "22471A4357",
        "parentNo": 9963256165,
        "studentNo": 8712401799
      },
      {
        "name": "MERIGA PRAVEEN KUMAR .",
        "rollNo": "23475A4301",
        "parentNo": 9985133867,
        "studentNo": 7396319169
      },
      {
        "name": "KOMMINEDI KIRAN KUMAR .",
        "rollNo": "23475A4302",
        "parentNo": 9908056213,
        "studentNo": 9603763646
      },
      {
        "name": "THIRUPATI JAI PRAKASH .",
        "rollNo": "23475A4303",
        "parentNo": 9494557994,
        "studentNo": 9494557994
      },
      {
        "name": "GEESALA SRI DATTA SAI .",
        "rollNo": "23475A4304",
        "parentNo": 9392934325,
        "studentNo": 7660976705
      },
      {
        "name": "NASANA NAGA VENKATESH .",
        "rollNo": "23475A4305",
        "parentNo": 9182374973,
        "studentNo": 6300076821
      },
      {
        "name": "TATIPARTHI SANGA REDDY .",
        "rollNo": "23475A4306",
        "parentNo": 9381429942,
        "studentNo": 9381429942
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
    