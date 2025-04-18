﻿using TimeCapsuleX.Common.Core;

namespace TimeCapsuleX.TimeBased.Core.BusinessRules;

internal sealed class CapsuleCannotBeWithoutItsContentsRule : IBusinessRule
{
    private readonly string? _title;
    private readonly string? _message;
    
    internal CapsuleCannotBeWithoutItsContentsRule(string? title, string? message)
    {
        _title = title;
        _message = message;
    }
    
    public bool IsMet() 
        => !string.IsNullOrEmpty(_title) && 
           !string.IsNullOrEmpty((_message));

    public string Error => "The capsule cannot be without a title and a message";
}
