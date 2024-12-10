import { PageTitle} from '../../../_metronic/layout/core'
import EquipementsPage from './EquipementsPage'

const EquipementsWrapper = () => {
    return (
      <>
        <PageTitle description='Vous avez 24 nouvelles abonnements' breadcrumbs={[]}>
          Salut, Noel
        </PageTitle>
        <EquipementsPage />
      </>
    )
  }

export default EquipementsWrapper