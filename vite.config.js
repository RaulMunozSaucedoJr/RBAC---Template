import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
dotenv.config()

export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000 || import.meta.env.VITE_DEVELOPMENT_PORT
	},
	resolve: {
		alias: {
			// ! BACKEND
			// * * AUTH-CONTEXT
			'@authContext': '/src/backend/authentication/context/authContext.jsx',
			// * * PRIVATE ROUTES - ONLY AUTHENTICATED ROUTES
			'@protectedRoute': '/src/backend/authentication/protected/protectedRoute.jsx',
			// * * SOCIAL MEDIA LOGIN
			'@facebookSignIn': '/src/backend/authentication/utils/facebookSignIn/facebookSignIn.jsx',
			'@googleSignIn': '/src/backend/authentication/utils/googleSignIn/googleSignIn.jsx',
			// * * LOGIN WITH EMAIL AND PASSWORD
			'@logIn': '/src/backend/authentication/utils/logIn/logIn.jsx',
			// * * LOGOUT
			'@logOut': '/src/backend/authentication/utils/logOut/logOut.jsx',
			// * * PASSWORD RESET
			'@passwordReset': '/src/backend/authentication/utils/passwordReset/passwordReset.jsx',
			// * * SIGN UP/REGISTER WITH EMAIL AND PASSWORD
			'@signUpEmailAndPassword': '/src/backend/authentication/utils/signUp/singUp.jsx',
			// * * FIREBASE CONFIGURATION / CONECTION
			'@configuration': '/src/backend/firebase/configuration/configuration.jsx',
			// * * FIREBASE METHODS FOR: ADD, DELETE, MODIFY, GET ONE/ALL COLLECTION OF DATA AND DELETE (CRUD)
			'@addDocument': '/src/backend/firebase/functions/addDocument/addDocument.jsx',
			'@deleteDocument': '/src/backend/firebase/functions/deleteDcoument/deleteDocument.jsx',
			'@getCollection': '/src/backend/firebase/functions/getCollection/getCollection.jsx',
			'@getDocument': '/src/backend/firebase/functions/getDocument/getDocument.jsx',
			'@updateDocument': '/src/backend/firebase/functions/updateDocument/updateDocument.jsx',
			// !FRONTEND
			// * * FONTS: TITLE - SUBTITLE -GENERAL
			'@titleFont': '/src/frontend/assets/fonts/title/Rubik-VariableFont_wght.ttf',
			'@subtitleFont': '/src/frontend/assets/fonts/subtitle/Biryani-Bold.ttf',
			'@generalFont': '/src/frontend/assets/fonts/general/Catamaran-VariableFont_wght.ttf',
			// * * IMAGES: JPG - PNG -SVG

			// * * ATOMS
			'@button': '/src/frontend/components/atoms/button/button.jsx',
			'@input': '/src/frontend/components/atoms/input/input.jsx',
			'@textArea': '/src/frontend/components/atoms/textArea/textArea.jsx',
			'@indexAtoms': '/src/frontend/components/atoms/index.jsx',
			// * * MOLECULES
			'@alert': '/src/frontend/components/molecules/alert/alert.jsx',
			'@form': '/src/frontend/components/molecules/form/form.jsx',
			'@table': '/src/frontend/components/molecules/table/table.jsx',
			'@indexMolecules': '/src/frontend/components/molecules/index.jsx',
			// * * ORGANISMS
			'@card': '/src/frontend/components/organisms/card/card.jsx',
			'@footer': '/src/frontend/components/organisms/footer/footer.jsx',
			'@modal': '/src/frontend/components/organisms/modal/modal.jsx',
			'@navbar': '/src/frontend/components/organisms/navbar/navbar.jsx',
			'@navbarMobile': '/src/frontend/components/organisms/navbar/mobile/mobile.jsx',
			'@sidebar': '/src/frontend/components/organisms/sidebar/sidebar.jsx',
			'@indexOrganisms': '/src/frontend/components/organisms/index.jsx',
			// * * PAGES
			'@home': '/src/frontend/components/pages/home/home.jsx',
			'@notFound': '/src/frontend/components/pages/notFound/notFound.jsx',
			'@projects': '/src/frontend/components/pages/projects/projects.jsx',
			'@services': '/src/frontend/components/pages/services/services.jsx',
			'@contact': '/src/frontend/components/pages/contact/contact.jsx',
			'@useCase': '/src/frontend/components/pages/useCase/useCase.jsx',
			'@loginPage': '/src/frontend/components/pages/login/Login.jsx',
			'@signUpPage': '/src/frontend/components/pages/signUp/signUp.jsx',
			'@recoverPasswordPage': '/src/frontend/components/pages/recoverPassword/recoverPassword.jsx',
			'@dashboard': '/src/frontend/components/pages/dashboard/Dashboard.jsx',
			'@indexPages': '/src/frontend/components/pages/index.jsx',
			// * * FEATURES: HOOKS (USEFORM - USEFORMVALIDATION)
			'@useForm': '/src/frontend/features/hooks/useForm/useForm.jsx',
			'@useFormValidation': '/src/frontend/features/hooks/useFormValidation/useFormValidation.jsx',
			// * * FEATURES: UTILS (INITIALSTATES - VALIDATIONFORM)
			'@initialStates': '/src/frontend/features/hooks/utils/initialStates/initialStates.jsx',
			'@validationForm': '/src/frontend/features/hooks/utils/validationsForm/validationsForm.jsx',
			// * * FEATURES: ROUTES (PRIVATE, PUBLIC, ERROR)
			'@privateRoute': '/src/frontend/features/routes/private/privateRoutes.jsx',
			'@publicRoute': '/src/frontend/features/routes/public/publicRoutes.jsx',
			'@errorRoute': '/src/frontend/features/routes/error/errorRoute.jsx',
			// ! APP
			'@App': '/src/App.jsx',
			// ! MAIN
			'@Main': '/src/main.jsx' 
		}
	}
})
