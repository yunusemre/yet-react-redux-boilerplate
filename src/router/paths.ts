const Path = {
  login: '/auth/login',
  forgot_password: '/auth/forgot-password',
  profile: '/profile',
  home: '/home',
  dashboard: '/dashboard',
  roles: '/users/permission',
  notifications: '/notifications',
  teamLeader: '/hubs/team-lider',
};

const win: any = window;
win.Path = Path;
export default Path;
