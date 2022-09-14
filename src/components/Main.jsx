import {Routes, Route, Outlet} from 'react-router-dom'
import People from '../pages/People'
import Show from '../pages/Show'

export default function Main() {
    return (
        <div className="main">
            <Outlet />
            <Routes>
                <Route path="/" element={<People />} />
                <Route path="/people/:id" element={<Show />} />
            </Routes>
        </div>
    )
}