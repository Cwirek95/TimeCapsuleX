using Microsoft.Extensions.DependencyInjection;

namespace TimeCapsuleX.Common.Infrastructure.Clock;

internal static class ClockModule
{
    internal static IServiceCollection AddClock(this IServiceCollection services) =>
        services.AddSingleton(TimeProvider.System);
}
