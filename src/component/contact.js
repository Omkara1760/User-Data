import React, { useState ,useEffect}from 'react'
import ContactForm from './contactForm'
import firebaseDb from '../firebase';

export default function Contact() {
  const [contactObjects, setcontactObjects] = useState({})
  const [currentId, setcurrentId] = useState('')
  
  const addOrEdit = (obj) => {
    if (currentId === '')
    {
      firebaseDb.child("contacts").push(obj, (err) => {
        if (err) console.log(err);
        else setcurrentId('');
      });
    }
    else
    {
      firebaseDb.child(`contacts/${currentId}`).set(
        obj,
        (err) => {
          if (err) console.log(err);
          else setcurrentId('');
        }
      );
      }
     
  }

  useEffect(() => {
    firebaseDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setcontactObjects({
          ...snapshot.val(),
        });
      }
    });
  }, []);

   

      const onDelete = (id) => {
        if (window.confirm('Are you sure to delete this record ?'))
        {
          firebaseDb.child(`contacts/${id}`).remove(
            err => {
              if (err)
              {
                console.log(err)
              }
              else
              {
                setcurrentId('')
                }
            }
          )
          }
      };

    return (
      <>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 text-center">User Details</h1>
            <p className="lead"></p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <ContactForm {...({contactObjects,addOrEdit,currentId})}/>
          </div>
          <div className="col-md-7">
            <table className="table table-borderless table-stripped">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(contactObjects).map((key) => (
                  <tr key={key}>
                    <td>{contactObjects[key].fullName}</td>
                    <td>{contactObjects[key].mobile}</td>
                    <td>{contactObjects[key].email}</td>
                    <td className="bg-light">
                      <a
                        className="btn text-primary"
                        onClick={() => {
                          setcurrentId(key);
                        }}
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </a>
                      <a
                        className="btn text-danger"
                        onClick={() => {
                          onDelete(key);
                        }}
                      >
                        <i className="far fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
}
