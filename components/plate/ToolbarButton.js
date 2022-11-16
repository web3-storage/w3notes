
export default function ToolbarButton ({ className = 'w-8 h-8', active, ...props }) {
  const allClassNames = `${className} ${active ? 'bg-blue-200 text-blue-700' : 'bg-slate-200'}`

  return (
    <button
    className={allClassNames}
      {...props}
    />
  );
};