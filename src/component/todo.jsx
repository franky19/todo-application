import {Modal,Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTodoAction } from "../redux/action/todo.action";
import moment from "moment";

const Todo =()=>{
    const todo = useSelector(state=>state.todo)
    const dispatch=useDispatch()
    const [isUpdate,setUpdate]=useState(false)
    const handleShowUpdate = () => setUpdate(true);
    const handleCloseUpdate=()=>setUpdate(false)
    const [showModalStatus, setShowModalStatus] = useState(false);
     const handleCloseModalStatus = () => setShowModalStatus(false)
     const handleShowModalStatus = () => setShowModalStatus(true);

     
    useEffect(()=>{
        dispatch(getTodoAction())
    },[dispatch])
  

    const [stateModal,setStateModal]=useState({
        id:'',
        title:'',
        description:'',
        createdAt:'',
        status:'',
     })

     

     const clickLihat = (title,description,status,createdAt)=>() => {
        setStateModal({
           title,
           description,
           status,
           createdAt
        });
        handleShowModalStatus()
    }

    const clickHapus=(id)=>()=>{
        if(stateModal.status==='tidak selesai'){
            setStateModal({id})
        }
        
    }

    const clickUpdate=()=>()=>{
        handleShowUpdate()
    }

    const clickSimpan=()=>()=>{
        handleCloseUpdate()

    }

     const renderModalRow = () => (
         <Modal show={showModalStatus} onHide={handleCloseModalStatus}>
                <Modal.Header>
                    <Modal.Title>Kesalahan Klik</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="form-group">
                        <label className="col-md-3 col-sm-3">judul</label>
                        <label className="col-md-2 col-sm-2">:</label>
                       
                        {isUpdate? <input type="text" 
                            value={stateModal.title}
                             onChange={(e)=>{
                                setStateModal({...stateModal,
                                    title:e.target.value
                                })
                             }}
                             /> :<span className='ml-2'>{stateModal.title}</span>}
                    </div>
                    <div className="form-group">
                        <label className="col-md-3 col-sm-3">deskripsi</label>
                        <label className="col-md-2 col-sm-2">:</label>
                        {isUpdate? <input type="text" 
                            value={stateModal.description}
                             onChange={(e)=>{
                                setStateModal({...stateModal,
                                    description:e.target.value
                                })
                             }}
                             /> :<span className='ml-2'>{stateModal.description}</span>}

                    </div>
                    <div className="form-group">
                        <label className="col-md-3 col-sm-3">status</label>
                        <label className="col-md-2 col-sm-2">:</label>
                        {isUpdate?
                        <>
                        <input type='radio'value='selesai' id={stateModal.status} onChange={(e) => setStateModal({ ...stateModal, status: e.target.value })} name='status'/> 
                        <label htmlFor={stateModal.status}>Selesai</label>
                        <input className='ml-3' type='radio'value='tidak selesai' id={stateModal.status} onChange={(e) => setStateModal({ ...stateModal, status: e.target.value })} name='status' /> 
                        <label htmlFor={stateModal.status}>tidak selesai</label>
                        </>
                        :<span className='ml-2'>{stateModal.status}</span> }
                    </div>
                    <div className="form-group">
                        <label className="col-md-3 col-sm-3">tanggal buat</label>
                        <label className="col-md-2 col-sm-2">:</label>
                        <span className='ml-2' >{stateModal.createdAt}</span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {isUpdate?<Button variant="default" onClick={clickSimpan(stateModal.id)}>simpan</Button>:<Button variant="default" onClick={clickUpdate(stateModal.id)}>Ubah</Button>}
                    {/* <Button variant="default" onClick={clickUpdate(stateModal.id)}>Ubah</Button> */}
                    <Button variant="danger" onClick={clickHapus(stateModal.id)}>Hapus</Button>
                </Modal.Footer>
         </Modal>
     ) 

    return(
        <>
        <div className="container">
            <div className="text-center mb-3">
                <h1>
                    todo list application
                </h1>
            </div>
                {todo.todo.filter(td => td.status===0).map((todolist , key ) => (
                    <div className="card" style={{width:"100%",marginRight:"20px", marginBottom:"5px",color:"red"}} onClick={clickLihat(todolist.title,todolist.description,todolist.status===0 ?'tidak selesai':'selesai', moment(todolist.createdAt).format('DD-MM-YYYY, hh:mm a'),todolist.id)}>
                        <div className="card-body">
                            <h6 className="card-title ml-3">{todolist.title}</h6>
                        </div>
                    </div>
                ))}
                 {todo.todo.filter(td => td.status===1).map((todolist , key ) => (
                    <div className="card" style={{width:"100%",marginRight:"20px", marginBottom:"5px",color:"green"}}  onClick={clickLihat(todolist.title,todolist.description,todolist.status===0 ?'tidak selesai':'selesai',moment(todolist.createdAt).format('DD-MM-YYYY, hh:mm a'))}>
                    <div className="card-body">
                        <h6 className="card-title ml-3">{todolist.title}</h6>
                    </div>
                </div>
                ))}
            </div>
        {renderModalRow()}
        </>
    )
}

export default Todo