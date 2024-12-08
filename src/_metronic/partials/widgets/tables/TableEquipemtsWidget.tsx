import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
}

const TableEquipemtsWidget: React.FC<Props> = ({className}) => {
    return (
        // card mb-5 mb-xl-8
        <div className={`card ${className}`}>
								{/* <!--begin::Header--> */}
								<div className="card-header border-0 pt-5">
									<h3 className="card-title align-items-start flex-column">
										<span className="card-label fw-bold fs-3 mb-1">Members Statistics</span>
										<span className="text-muted mt-1 fw-semibold fs-7">Over 500 members</span>
									</h3>
									<div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" data-bs-original-title="Click to add a user" data-kt-initialized="1">
										<a href="#" className="btn btn-sm btn-light btn-active-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">
										<i className="ki-duotone ki-plus fs-2"></i>New Member</a>
									</div>
								</div>
								{/* <!--end::Header--> */}
								{/* <!--begin::Body--> */}
								<div className="card-body py-3">
									{/* <!--begin::Table container--> */}
									<div className="table-responsive">
										{/* <!--begin::Table--> */}
										<table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
											{/* <!--begin::Table head--> */}
											<thead>
												<tr className="fw-bold text-muted">
													<th className="w-25px">
														<div className="form-check form-check-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" value="1" data-kt-check="true" data-kt-check-target=".widget-9-check" />
														</div>
													</th>
													<th className="min-w-200px text-center">Nom</th>
													<th className="min-w-200px">Déscription</th>
													<th className="min-w-150px">Type</th>
													<th className="min-w-200px">Zone Cible</th>
													<th className="min-w-100px text-end">Actions</th>
												</tr>
											</thead>
											{/* <!--end::Table head--> */}
											{/* <!--begin::Table body--> */}
											<tbody>
												<tr>
													<td>
													<div className='form-check form-check-sm form-check-custom form-check-solid'>
														<input className='form-check-input widget-9-check' type='checkbox' value='1' />
													</div>
													</td>
													<td>
													<div className='d-flex align-items-center'>
														<div className='symbol symbol-45px me-5'>
														<img src="https://m.media-amazon.com/images/I/61ckTlseFWS._AC_SL1500_.jpg" alt='' />
														</div>
														<div className='d-flex justify-content-start flex-column'>
														<a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
															Banc de Musculation
														</a>
														</div>
													</div>
													</td>
													<td>
													<a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
														Banc de musculation ajustable pour divers exercices de musculation.
													</a>
													</td>
													<td>
														<a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
														<span className="badge text-bg-info">Machine</span>
														</a>
													</td>
													<td>
														<div className='row'>
															<span className='badge badge-light-dark fs-7 fw-bold inline-block col-6 w-25 me-1 mb-2'>Jambe</span>
															<span className='badge badge-light-dark fs-7 fw-bold inline-block col-6 w-25 me-1 mb-2'>Cuisse</span>
															<span className='badge badge-light-dark fs-7 fw-bold inline-block col-6 w-25 me-1 mb-2'>Orteille</span>
															<span className='badge badge-light-dark fs-7 fw-bold inline-block col-6 w-25 me-1 mb-2'>Jambe</span>
															<span className='badge badge-light-dark fs-7 fw-bold inline-block col-6 w-25 me-1 mb-2'>Cuisse</span>
															<span className='badge badge-light-dark fs-7 fw-bold inline-block col-6 w-25 me-1 mb-2'>Orteille</span>
														</div>
													</td>
													<td>
														<div className='d-flex justify-content-end flex-shrink-0'>
															<a
															href='#'
															className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
															>
															<KTIcon iconName='pencil' className='fs-3' />
															</a>
															<a
															href='#'
															className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
															>
															<KTIcon iconName='trash' className='fs-3' />
															</a>
														</div>
													</td>
												</tr>
											</tbody>
											{/* <!--end::Table body--> */}
										</table>
										{/* <!--end::Table--> */}
									</div>
									{/* <!--end::Table container--> */}
								</div>
								{/* <!--begin::Body--> */}
							</div>
    )
}

export {TableEquipemtsWidget}