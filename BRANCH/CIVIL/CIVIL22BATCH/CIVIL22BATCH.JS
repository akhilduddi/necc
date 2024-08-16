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
        "name": "SHAIK ABDUL BASHA",
        "rollNo": "20471A0143",
        "parentNo": 9951143505,
        "studentNo": 868889613,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625749/CIVIL22Batch/CIVIL21BatchASection/uy4tbtdhjeknguzjcjy3.jpg"
      },
      {
        "name": "AMBATI GOPI KRISHNA",
        "rollNo": "22471AO101",
        "parentNo": 7893265820,
        "studentNo": 7396382641,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625750/CIVIL22Batch/CIVIL21BatchASection/jwhshdykx8gsjxkctsib.jpg"
      },
      {
        "name": "DEGALA JEEVAN KUMAR",
        "rollNo": "22471AO102",
        "parentNo": 7013082074,
        "studentNo": 7013082074,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625748/CIVIL22Batch/CIVIL21BatchASection/mdvwkyhzo41rqfzsne04.jpg"
      },
      {
        "name": "KALAYANAM KATYAYANI",
        "rollNo": "22471AO103",
        "parentNo": 9701518793,
        "studentNo": 7671073835,
        "imageUrl": "CIVIL22Batch/CIVIL21BatchASection/vv9xwbx3ruyjopszvk0w"
      },
      {
        "name": "KOLAGANI ARJUN",
        "rollNo": "22471AO104",
        "parentNo": 9441537206,
        "studentNo": 6305047132,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625749/CIVIL22Batch/CIVIL21BatchASection/tni32t5g8o8mctqgkzeb.jpg"
      },
      {
        "name": "PATHAN SAMEER",
        "rollNo": "22471AO106",
        "parentNo": 7416190723,
        "studentNo": 7995387331,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625749/CIVIL22Batch/CIVIL21BatchASection/k13smw6qfofjdvdw5ysf.jpg"
      },
      {
        "name": "PERUPOGU KARTHIK",
        "rollNo": "22471AO107",
        "parentNo": 9705527135,
        "studentNo": 8688663608,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625747/CIVIL22Batch/CIVIL21BatchASection/znj8omcu75lxvktpdoef.jpg"
      },
      {
        "name": "PILLI ASISH KUMAR",
        "rollNo": "22471AO108",
        "parentNo": 9392527251,
        "studentNo": 7075407478,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625749/CIVIL22Batch/CIVIL21BatchASection/qeohrwgvyghszrcc7wgv.jpg"
      },
      {
        "name": "SHAIK JOHN BASHA",
        "rollNo": "22471AO109",
        "parentNo": 9177287130,
        "studentNo": 7893897142,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625748/CIVIL22Batch/CIVIL21BatchASection/wpi240wle0ziivlo0n3q.jpg"
      },
      {
        "name": "SIVAIAH CHENNABOINA",
        "rollNo": "22471AO110",
        "parentNo": 7658963221,
        "studentNo": 6305260136,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625748/CIVIL22Batch/CIVIL21BatchASection/vq5jx7n4xykix0opmke7.jpg"
      },
      {
        "name": "TADIMALLA VENKATA CHANDU",
        "rollNo": "22471AO111",
        "parentNo": 9676769367,
        "studentNo": 6304428151,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625749/CIVIL22Batch/CIVIL21BatchASection/ixfroxev8b4sdnjysdv4.jpg"
      },
      {
        "name": "TAMMISETTY AJAY",
        "rollNo": "22471AO112",
        "parentNo": 9901333869,
        "studentNo": 9542066620,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625749/CIVIL22Batch/CIVIL21BatchASection/fc4urioolt2u54hnq1n3.jpg"
      },
      {
        "name": "THALLURI ASHOK",
        "rollNo": "22471AO113",
        "parentNo": 9701917240,
        "studentNo": 6303649909,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625748/CIVIL22Batch/CIVIL21BatchASection/gswemzlefigo8gnindbk.jpg"
      },
      {
        "name": "KOVVURI VENKATESH",
        "rollNo": "23475A0101",
        "parentNo": 9030533370,
        "studentNo": 7093018718,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625747/CIVIL22Batch/CIVIL21BatchASection/g9sp5qudg9hcrva3dgvq.jpg"
      },
      {
        "name": "TAMMISETTI YOHANU",
        "rollNo": "23475A0102",
        "parentNo": 9398682087,
        "studentNo": 9398682087,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625747/CIVIL22Batch/CIVIL21BatchASection/b5vmivzaa4fvtqcsxb0d.jpg"
      },
      {
        "name": "SHAIK HUSSAIN VALI",
        "rollNo": "23475A0103",
        "parentNo": 8688889438,
        "studentNo": 7673935144,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625748/CIVIL22Batch/CIVIL21BatchASection/k646esbsngmfeo6ei6xd.jpg"
      },
      {
        "name": "SHAIK BABJI",
        "rollNo": "23475A0104",
        "parentNo": 8688889438,
        "studentNo": 7673935144,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625748/CIVIL22Batch/CIVIL21BatchASection/qms8ct0ptpcqwb26x6kg.jpg"
      },
      {
        "name": "MOYILAKALVA NAVADEEP",
        "rollNo": "23475A0105",
        "parentNo": 9885969295,
        "studentNo": 9912100184,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625748/CIVIL22Batch/CIVIL21BatchASection/r22givjgrbqzvswkz4tu.jpg"
      },
      {
        "name": "PALLA LOKESH",
        "rollNo": "23475A0106",
        "parentNo": 9705591232,
        "studentNo": 9182509652,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625747/CIVIL22Batch/CIVIL21BatchASection/nkqysfz6hukwivlrwww0.jpg"
      },
      {
        "name": "PAPPALA TIRUPATHI",
        "rollNo": "23475A0107",
        "parentNo": 6305831091,
        "studentNo": 6305831091,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625747/CIVIL22Batch/CIVIL21BatchASection/jhxfpndk4fr3sczjkstt.jpg"
      },
      {
        "name": "KODAVATI ANIL BABU",
        "rollNo": "23475A0108",
        "parentNo": 9014464211,
        "studentNo": 7330931709,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625747/CIVIL22Batch/CIVIL21BatchASection/qxwkgtgzjpaliqeax8nj.jpg"
      },
      {
        "name": "KATTA GREESHMANJALI",
        "rollNo": "23475A0109",
        "parentNo": 8309166368,
        "studentNo": 8328619177,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625747/CIVIL22Batch/CIVIL21BatchASection/qxwkgtgzjpaliqeax8nj.jpg"
      },
      {
        "name": "TAMMISETTY DURGA PRASAD",
        "rollNo": "23475A0110",
        "parentNo": 7981743231,
        "studentNo": 9550274797,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625747/CIVIL22Batch/CIVIL21BatchASection/fyxpwdcfrkhapevyyfu0.jpg"
      },
      {
        "name": "KANDUKURI DANIYELU",
        "rollNo": "23475A0111",
        "parentNo": 9866645868,
        "studentNo": 8919152814,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625746/CIVIL22Batch/CIVIL21BatchASection/rrpclfxkrmoy58ghqenp.jpg"
      },
      {
        "name": "PONNAPATI NANDAVARDHAN REDDY",
        "rollNo": "23475A0112",
        "parentNo": 8309624215,
        "studentNo": 8309624215,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625746/CIVIL22Batch/CIVIL21BatchASection/f6lpo72waxg9q4hdflvv.jpg"
      },
      {
        "name": "JETTI PAVANI",
        "rollNo": "23475A0113",
        "parentNo": 9666719069,
        "studentNo": 8978844708,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625746/CIVIL22Batch/CIVIL21BatchASection/meb6fwxw77rvytcwqjfx.jpg"
      },
      {
        "name": "JANA NAGA SAI VENKATA MOHAN",
        "rollNo": "23475A0114",
        "parentNo": 7989436708,
        "studentNo": 7989436708,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625746/CIVIL22Batch/CIVIL21BatchASection/feye9bkvhktv19irrfze.jpg"
      },
      {
        "name": "VANTALA TEJASWINI",
        "rollNo": "23475A0115",
        "parentNo": 9281071984,
        "studentNo": 9059885842,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625746/CIVIL22Batch/CIVIL21BatchASection/nsb3whllluz9ljt3wvxq.jpg"
      },
      {
        "name": "MARADANA SAI GANESH",
        "rollNo": "23475A0116",
        "parentNo": 9000090291,
        "studentNo": 8919249528,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625746/CIVIL22Batch/CIVIL21BatchASection/dtnzmlpaw73bpubjhcnq.jpg"
      },
      {
        "name": "VINUKONDA RAJU",
        "rollNo": "23475A0117",
        "parentNo": 9494530350,
        "studentNo": 7382475906,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625745/CIVIL22Batch/CIVIL21BatchASection/ciwb4usjqqrkx06wqjse.jpg"
      },
      {
        "name": "CHELIKANI MAHESH",
        "rollNo": "23475A0118",
        "parentNo": 9849602961,
        "studentNo": 9652382061,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625747/CIVIL22Batch/CIVIL21BatchASection/b2n2xkgirzinbwkjfk2u.jpg"
      },
      {
        "name": "VAJJA GOPALA KRISHNA MURTHY",
        "rollNo": "23475A0119",
        "parentNo": 9000192432,
        "studentNo": 8247624940,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625746/CIVIL22Batch/CIVIL21BatchASection/e0avakfskix2b8japupo.jpg"
      },
      {
        "name": "ANDRA NAVEEN",
        "rollNo": "23475A0120",
        "parentNo": 9347793351,
        "studentNo": 9381793676,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625746/CIVIL22Batch/CIVIL21BatchASection/lr5k69iaxnuzwn2rerz2.jpg"
      },
      {
        "name": "BHUKYA VAGYA NAIK",
        "rollNo": "23475A0121",
        "parentNo": 9391592851,
        "studentNo": 7386437424,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625747/CIVIL22Batch/CIVIL21BatchASection/wk2r9wh3dvvefz59s2cc.jpg"
      },
      {
        "name": "REDDYBOINA AJAY KUMAR",
        "rollNo": "23475A0122",
        "parentNo": 834196873,
        "studentNo": 8341496873,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625746/CIVIL22Batch/CIVIL21BatchASection/pp98z7oykh0rhnwn0dsf.jpg"
      },
      {
        "name": "PEDDAKOTLA JOSEPH SHOWRI SAGAR KUMAR",
        "rollNo": "23475A0123",
        "parentNo": 7794006855,
        "studentNo": 9014697472,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625748/CIVIL22Batch/CIVIL21BatchASection/smjfgda1qpeyopjsfwdp.jpg"
      },
      {
        "name": "SHAIK AKRAM",
        "rollNo": "23475A0124",
        "parentNo": 6304428151,
        "studentNo": 9618789765,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723625745/CIVIL22Batch/CIVIL21BatchASection/s1hfbavee2j79ltosu15.jpg"
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
    