function ListItem({ item, onDelete, index }) {
    return (
      <li style={{ margin: '0.5rem 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '0.5rem' }}>
            {item.completed ? '✔️' : '❌'}
          </span>
          <span style={{ 
            marginLeft: '0.5rem', 
            textDecoration: item.completed ? 'line-through' : 'none' 
          }}>
            {item.task}
          </span>
        </div>
        <button 
          onClick={() => onDelete(index)}
          style={{
            marginLeft: '1rem',
            background: '#ff4444',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '0.25rem 0.5rem',
            cursor: 'pointer'
          }}
        >
          Delete
        </button>
      </li>
    );
  }
  
  export default ListItem;