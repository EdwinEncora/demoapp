const express = require('express')
const app = express()
const morgan = require('morgan')

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const URL_BASE= '/profuturo-dmz-app'
const URL_BASE_OAUTH= '/profuturo-dmz-oauth-app'

//DocumentTypeApi
app.use(`${URL_BASE}/generico/tipodocumento`, require('./routes/type_documents'));

//KeyboardApi
app.use(`${URL_BASE}/generico/tecladovirtual`, require('./routes/keyboard'));

//LoginApi
app.use(`${URL_BASE_OAUTH}/fondos/generartoken`, require('./routes/login'));

//AccountStatusApi
app.use(`${URL_BASE}/generico/obtenerListaAnno`, require('./routes/get_years_eecc'));
app.use(`${URL_BASE}/generico/obtenerListaMeses`, require('./routes/get_periods_eecc'));
app.use(`${URL_BASE}/generico/send_pdf_by_email`, require('./routes/send_pdf_by_email')); //POST DUMMY

//UbigeoApi
app.use(`${URL_BASE}/generico/obtenerLocalidad`, require('./routes/get_locality'));//GET
app.use(`${URL_BASE}/generico/obtenerDireccion`, require('./routes/get_locality'));//GET
app.use(`${URL_BASE}/generico/obtenerPaises`, require('./routes/get_countries'));//GET
app.use(`${URL_BASE}/generico/obtenerDepartamentos`, require('./routes/get_departments'));//POST
app.use(`${URL_BASE}/generico/obtenerProvincia`, require('./routes/get_provinces'));//POST
app.use(`${URL_BASE}/generico/obtenerDistrito`, require('./routes/get_districts'));//POST

//ServiceConditionsApi
app.use(`${URL_BASE}/generico/terminosCondiciones`, require('./routes/service_conditions'));//GET
app.use(`${URL_BASE}/generico/proteccionDatos`, require('./routes/service_conditions'));//GET

//ProfileApi
app.use(`${URL_BASE}/api/obtenerDatosAfiliado`, require('./routes/profile'));//GET
app.use(`${URL_BASE}/api/validacionSolicitud`, require('./routes/check_household_pending_request'));//GET
app.use(`${URL_BASE}/api/datosContacto`, require('./routes/update_profile_data'));//POST
app.use(`${URL_BASE}/api/datosDireccion`, require('./routes/update_profile_data'));//POST
app.use(`${URL_BASE}/api/datosPersonales`, require('./routes/update_profile_data'));//POST
app.use(`${URL_BASE}/api/update_accepted_conditions`, require('./routes/update_accepted_conditions'));//POST DUMMY

//ProfitApi
app.use(`${URL_BASE}/api/aportesRentabilidad`, require('./routes/get_profit'));//POST

//ProfuturoFundApi
app.use(`${URL_BASE}/fondo/obtenerDatosPersonales`, require('./routes/get_personal_data'));//GET
app.use(`${URL_BASE}/fondo/obtenerConfiguracion`, require('./routes/get_configuration'));//GET
app.use(`${URL_BASE}/fondo/registrarAOVoluntario`, require('./routes/make_contribution'));//POST

//RepealDataProcessingApi
app.use(`${URL_BASE}/generico/check_data_processing`, require('./routes/check_data_processing'));//POST
app.use(`${URL_BASE}/generico/repeal_data_processing`, require('./routes/repeal_data_processing'));//POST

//HomeApi
app.use(`${URL_BASE}/api/home`, require('./routes/get_home'));//GET

//DrawerApi
app.use(`${URL_BASE}/generico/menuLateral`, require('./routes/get_drawer'));//GET

//DeviceReliableApi
app.use(`${URL_BASE}/api/validacionSeguridad`, require('./routes/validation'));//POST

//BankActivitiesApi
app.use(`${URL_BASE}/api/listaAnno`, require('./routes/get_years'));//POST
app.use(`${URL_BASE}/api/listaMovimiento`, require('./routes/get_activities'));//POST
app.use(`${URL_BASE}/api/movimientoAfiliadoPDF`, require('./routes/get_pdf'));//POST

//PEPApi
app.use(`${URL_BASE}/pep/obtenerDatosAdicionalesPep`, require('./routes/get_pep'));//GET
app.use(`${URL_BASE}/pep/obtenerSector`, require('./routes/get_sectors'));//GET
app.use(`${URL_BASE}/pep/obtenerCargo`, require('./routes/get_positions'));//POST
app.use(`${URL_BASE}/pep/registroDatosAddPep`, require('./routes/update_additional_data'));//POST
app.use(`${URL_BASE}/pep/verificaSolicitudPendiente`, require('./routes/check_pending_request'));//GET

//OtpApi
app.use(`${URL_BASE}/fondo/generarTokenTemporal`, require('./routes/temporary_token'));//POST
app.use(`${URL_BASE}/fondo/validacionCodigoTemporal`, require('./routes/validate_temporary_token'));//POST
app.use(`${URL_BASE}/api/registroValidacionSeguridad`, require('./routes/register_reliable'));//POST

//FeeEvolutionApi
app.use(`${URL_BASE}/generico/periodoTiempo`, require('./routes/get_periods'));//GET
app.use(`${URL_BASE}/api/evolucionValorCuota`, require('./routes/get_fee_evolution'));//POST

//MyFundEvolutionApi
app.use(`${URL_BASE}/api/evolucionFondo`, require('./routes/get_my_fund_evolution'));//POST

app.use(`${URL_BASE}/api/register_form_dj`, require('./routes/register_form_dj'));//POST DUMMY
app.use(`${URL_BASE}/fondo/origin_fondos`, require('./routes/origen_fondos'));//GET DUMMY

app.use(`${URL_BASE}/api/aplicacion/android`, require('./routes/version_app'));//GET DUMMY

app.use(`${URL_BASE}/api/send_pdf_constancy`, require('./routes/send_pdf_constancy'));//POST DUMMY
app.use(`${URL_BASE}/api/send_pdf_voucherpay`, require('./routes/send_pdf_voucherpay'));//POST DUMMY
app.use(`${URL_BASE}/generico/get_data_employer`, require('./routes/get_data_employer'));//POST DUMMY
app.use(`${URL_BASE}/generico/get_voucher_info`, require('./routes/get_voucher_info'));//GET DUMMY

//difruta 
app.use(`${URL_BASE}/generico/get_disfruta_category`, require('./routes/get_disfruta_category'));//GET DUMMY


app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});