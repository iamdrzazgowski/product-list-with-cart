function Button({ children, icon, className, onClick }) {
    return (
        <button className={className} onClick={onClick}>
            {icon && <img src={icon} />}
            {children}
        </button>
    );
}

export default Button;
