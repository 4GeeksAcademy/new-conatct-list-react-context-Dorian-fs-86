import React, { useState } from 'react';

const AddContact = () => {
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        email: ''
    });

    const [contactList, setContactList] = useState([]);
    const[isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };
    const addContact = (e) => {
        e.preventDefault();

        if (!contact.name || !contact.phone || !contact.address || !contact.email) {
            alert('Por favor, rellene todos los campos.');
            return;
        }
        
        setContactList([...contactList, contact]);

        setContact({
            name: '',
            phone: '',
            address: '',
            email: '',
        });
    };

    const updateContact = (e) => {
        e.preventDefault();
        if(!contact.name || !contact.phone || !contact.address || !contact.email) {
            alert('Aún faltan campos por completar');
            return;
        }
        const updateContacts = [...contactList];
        updateContacts[editIndex] = contact;
        setContactList(updateContacts);

        setIsEditing(false);
        setEditIndex(null);

        setContact({
            name: '',
            phone: '',
            address: '',
            email: '',
        });
    };

    const handleEdit = (index) => {
        setContact(contactList[index]);
        setIsEditing(true);
        setEditIndex(index);
    }

    const handleDelete = (index) => {
        const updateContacts = contactList.filter((_,i) => i !== index);
        setContactList(updateContacts);
    };
        return (
            <div>
                <h2>{isEditing ? "Editar contacto" : "Añadr Contacto"}</h2>
                <form onSubmit={isEditing ? updateContact : addContact}>
                    <div>
                        <label>Nombre:</label>
                        <input
                            type='text'
                            name='name'
                            value={contact.name}
                            onChange={handleChange}
                            placeholder='Nombre'
                        />
                    </div>
                    <div>
                        <label>Teléfono:</label>
                        <input
                            type='text'
                            name='phone'
                            value={contact.phone}
                            onChange={handleChange}
                            placeholder='Teléfono'
                        />
                    </div>
                    <div>
                        <label>Dirección</label>
                        <input
                            type='text'
                            name='address'
                            value={contact.address}
                            onChange={handleChange}
                            placeholder='Dirección'
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type='text'
                            name='email'
                            value={contact.email}
                            onChange={handleChange}
                            placeholder='Email'
                        />
                    </div>
                    <button type='submit'>{isEditing ? "Actualizar Contacto" : "Agregar Contacto"}</button>
                </form>

                <h3>Lista de Contactos</h3>
                <ul>
                    {contactList.map((c, index) => (
                        <li key={index}>
                            <strong>Nombre:</strong> {contact.name}
                            <strong>Teléfono</strong> {contact.phone}
                            <strong>Dirección</strong> {contact.address}
                            <strong>Email</strong> {contact.email}
                            <button onClick={()=> handleEdit(index)}>Editar</button>
                            <button onClick={()=> handleDelete(index)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    export default AddContact;