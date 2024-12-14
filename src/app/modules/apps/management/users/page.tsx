// import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import { PageLink, PageTitle } from '../../../../../_metronic/layout/core'
import { UsersListWrapper } from '../../user-management/users-list/UsersList'


const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Gestion',
    path: '/gestion/users',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const UsersPage = () => {
  return (
    <>
    <PageTitle breadcrumbs={usersBreadcrumbs}>Utilisateurs</PageTitle>
    <UsersListWrapper />
  </>
  )
}

export default UsersPage
