import React ,{useEffect, useState} from 'react'

export default function ContactForm(props) {
    const initialFieldValues = {
        fullName: '',
        mobile: '',
        email: '',
        address:''
    }

    const [values,setValues] =useState(initialFieldValues)
    
    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }

    useEffect(() => {
        if (props.currentId === '')
        {
            setValues({...initialFieldValues})
        }
        else
        {
            setValues({...props.contactObjects[props.currentId]})
            }
    }, [props.currentId,props.contactObjects])


    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    return (
        
             <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" name="fullName" placeholder="Full Name"
                    value={values.fullName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>

                    <input className="form-control" name="mobile" placeholder="Mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" name="email" placeholder="Email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group">
               <input className="form-control" name="address" placeholder="Address"
                    value={values.address}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input type="submit" value="Submit" className="btn btn-primary btn-block" />
            </div>
        </form>
        
    )
}
