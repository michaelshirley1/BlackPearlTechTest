import { useState } from 'react'
import { TextField, FormGroup, FormControlLabel, Switch } from '@mui/material'
import './App.css'


interface Person{
  id?: number
  name: string
  address: string  
  address2: string  
  phoneNum: string  
  mobileNum: string
  showBanner?: boolean
}

var people: Person[] = [
  { id: 1, name: 'John Doe', address: '123 Main St', address2: 'Apt 1', phoneNum: '155-555-5555', mobileNum: '555-555-5555', showBanner: true},
  { id: 2, name: 'Jane Doe', address: '123 Main St', address2: 'Apt 1', phoneNum: '255-555-5555', mobileNum: '555-555-5555', showBanner: false },
  { id: 3, name: 'Steve Silver', address: '123 Main St', address2: 'Apt 1', phoneNum: '355-555-5555', mobileNum: '555-555-5555', showBanner: false },
  { id: 4, name: 'Johnny Christmas', address: '123 Main St', address2: 'Apt 1', phoneNum: '455-555-5555', mobileNum: '555-555-5555', showBanner: false },
  { id: 5, name: 'John Stockton', address: '123 Main St', address2: 'Apt 1', phoneNum: '555-555-5555', mobileNum: '555-555-5555', showBanner: true },
  { id: 6, name: 'Jane Smith', address: '123 Main St', address2: 'Apt 1', phoneNum: '555-555-5555', mobileNum: '555-555-5555', showBanner: false },
  { id: 7, name: 'John Smith', address: '123 Main St', address2: 'Apt 1', phoneNum: '555-555-5555', mobileNum: '555-555-5555', showBanner: false },
  { id: 8, name: 'Daniel Thunder', address: '123 Main St', address2: 'Apt 1', phoneNum: '555-555-5555', mobileNum: '555-555-5555', showBanner: true },
  { id: 9, name: 'Steve Stephens', address: '123 Main St', address2: 'Apt 1', phoneNum: '555-555-5555', mobileNum: '555-555-5555', showBanner: false },
  { id: 10, name: 'Michael Davidson', address: '123 Main St', address2: 'Apt 1', phoneNum: '555-555-5555', mobileNum: '555-555-5555', showBanner: true },
  { id: 11, name: 'Michael Jordan', address: '123 Main St', address2: 'Apt 1', phoneNum: '555-555-5555', mobileNum: '555-555-5555', showBanner: true },
  { id: 12, name: 'Todd Tanner', address: '123 Main St', address2: 'Apt 1', phoneNum: '555-555-5555', mobileNum: '555-555-5555', showBanner: false },
  { id: 13, name: 'Jaden Smith', address: '123 Main St', address2: 'Apt 1', phoneNum: '555-555-5555', mobileNum: '555-555-5555', showBanner: false },
  { id: 14, name: 'Sergei Bavlov', address: '123 Main St', address2: 'Apt 1', phoneNum: '555-555-5555', mobileNum: '555-555-5555', showBanner: false },
  { id: 15, name: 'Donald Group', address: '123 Main St', address2: 'Apt 1', phoneNum: '555-555-5555', mobileNum: '555-555-5555', showBanner: false },
  { id: 16, name: 'William Darth', address: '123 Main St', address2: 'Apt 1', phoneNum: '555-555-5555', mobileNum: '555-555-5555', showBanner: true },
  { id: 17, name: 'John Crawford', address: '123 Main St', address2: 'Apt 1', phoneNum: '555-555-5555', mobileNum: '555-555-5555', showBanner: false },
  { id: 18, name: 'Lisa Leslie', address: '123 Main St', address2: 'Apt 1', phoneNum: '555-555-5555', mobileNum: '555-555-5555', showBanner: true }
];

function App() {

  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const handlePersonClick = (person: Person) => {
    if (selectedPerson?.id === person.id) {
      setSelectedPerson(null);
    }
    else {
      setSelectedPerson(person);
    }
  };

  const handlePropertyChange = (property: string, value: any) => {
    if (selectedPerson?.id) {
      setSelectedPerson({ ...selectedPerson, [property]: value });
      //if I had a server set up I would cache the data locally, then update it in a bulk request to the server, depends on the use case honestly
      people[selectedPerson?.id - 1] = { ...selectedPerson, [property]: value };
    }
  }

  return (
    <div className="ParentDiv">
      <h1>People</h1>
      <div className="ListParent">
        <div className="PeopleListParent">
          
        <div className="PeopleList">
          {people.map((person, index) => (
            <div key={index} className={`Person ${selectedPerson?.id === person.id ? 'Selected' : ''}`} onClick={() => handlePersonClick(person)}>
              <p>{person.name}</p>
            </div>
          ))}
        </div>
          
        </div>
        <div className="PropertyTile" >
          <h1 className="PlaceHolderText">
            {selectedPerson ? '' : 'Please select a person to show their profile'}
          </h1>
          {selectedPerson && (
            <div className="PropertyContainer">
              <div className="PropertyValues">
                <h1>{selectedPerson.name}</h1>
                <TextField className="Property" type="text" id="outlined-basic" label="Address Line 1" variant="outlined" value={selectedPerson.address} onChange={(e) => handlePropertyChange( 'address', e.target.value )} />
                <TextField className="Property" type="text" id="outlined-basic" label="Address Line 2" variant="outlined" value={selectedPerson.address2} onChange={(e) => handlePropertyChange( 'address2', e.target.value )} />
                <TextField className="Property" type="text" id="outlined-basic" label="Phone Number" variant="outlined" value={selectedPerson.phoneNum} onChange={(e) => handlePropertyChange( 'phoneNum', e.target.value )} />
                <TextField className="Property" type="text" id="outlined-basic" label="Mobile Number" variant="outlined" value={selectedPerson.mobileNum} onChange={(e) => handlePropertyChange( 'mobileNum', e.target.value )} />
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch checked={selectedPerson.showBanner} name="Banner" onChange={() => handlePropertyChange('showBanner', !selectedPerson.showBanner )} />
                    }
                    label="Show Banner"
                  />
                </FormGroup>
              </div>
              <div className="Preview">
                <h1 style={{ paddingBottom:"20px" }}>Signature Preview</h1>
                <div className="SignatureFormat">
                <p style={{fontWeight:'Bold'}}  className="SignatureText">{selectedPerson.name}</p>
                <div className="DetailsFormat">
                  <div style={{width:"60%"}} className="AddressPhoneFormat">
                  <p className="SignatureText">{selectedPerson.address}</p>
                  <p className="SignatureText">{selectedPerson.address2}</p>
                  </div>
                  <div className="AddressPhoneFormat AddressPhone">
                  <div><p style={{fontWeight:'Bold'}} className="SignatureText">P</p></div>
                  <div><p style={{fontWeight:'Bold'}} className="SignatureText">M</p></div>
                  </div>
                  <div className="AddressPhoneFormat">
                  <p className="SignatureText">{selectedPerson.phoneNum}</p>
                  <p className="SignatureText">{selectedPerson.mobileNum}</p>
                  </div>
                </div>
                
                {selectedPerson.showBanner && <img style={{ width: "22vw", paddingTop:"20px" }} src="https://scontent.fakl2-1.fna.fbcdn.net/v/t39.30808-6/317078621_106700168944957_4487642974273071986_n.png?stp=dst-png_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aXShxLvza-UQ7kNvgFVEfIb&_nc_ht=scontent.fakl2-1.fna&oh=00_AYCc4j6P_e1DmqELnUwGhqpwxarr5C4R_dUUco0an7-ReA&oe=667B042E" alt="signature" />}
              
                </div>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App
